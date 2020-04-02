$(function() {
  //htmlタグ配下の要素を全部読み込む
  //turbolinks:load = window.onLoadの代替として利用できる。そのほかのturbolinksの挙動については以下のURL参照
  //https://qiita.com/morrr/items/54f4be21032a45fd4fe9
  
      //インクリメンタルサーチにて検索結果を表示するHTML要素
      var result_list = $("#user-search-result")
      //追加するチャットメンバー一覧
      var member_list = $("#add-member")
  
      //検索該当ユーザーの候補HTMLの追加メソッド
      function appendUserHTML(user) {
          var html_head    = `<div class="chat-group-user clearfix">`;
          var html_content = ``;
          var html_foot    = `</div>`;
          //メソッドの引数がオブジェクト(データがオブジェクト型であるならば)
          if (user instanceof Object) {
              console.log(user)
              html_content = `<p class="chat-group-user__name">${ user.user_name }</p>
                              <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.user_name  }">追加</div>`;
  
          //もし引数userにデータがオブジェクト型以外 = 文字列データ "一致するユーザーが見つかりません"を使ってHTML要素を生成
          }else{
              html_content = `<p class="chat-group-user__name">${ user }</p>`;
          }
          //最後にHTML要素を連結させて完成したHTML要素を検索結果要素へ挿入する
          result_list.append(html_head + html_content + html_foot);
      }
  
      //候補ユーザーをメンバーHTMLへの追加メソッド
      function addUserToMember(id, name) {
          console.log(name)
          //ビューファイル(_form.html)で作っている構造と同一にする必要あり = cssを正しく当てるため
          //<input name='group[user_ids][]' type='hidden' value= ユーザーのid番号 > = この記述があることでupdateアクションへ渡すparamsにグループユーザー構成配列へ該当ユーザー番号が挿入できる
          var html = `<div class='chat-group-user clearfix' id="chat-group-user-${ id }">
                          <input name='group[user_ids][]' type='hidden' value='${ id }'>
                          <p class='chat-group-user__name'>${ name }</p>
                          <div class='chat-group-user__btn chat-group-user__btn--remove'>削除</div>
                      </div>`;
          //チャットメンバーHTML要素へ挿入
          member_list.append(html);
      }
  
  
      //検索フォームのキーアップを検知して入力情報を送信
      $("#user-search-field").on("keyup", function() {
          //this = "#user-search-field"
          var input = $(this).val();
        console.log("ok")
  
          $.ajax({
              type: 'GET',
              url: '/users',              //users#indexアクションへ情報を送る
              data: { name: input },  //users#indexアクションで[:nickname]というキー名でinputバリューを扱うことができる
              dataType: 'json'            //users#indexアクションから返してもらうデータの型を指定
          })
  
          .done(function(users) {         //users= users#indexアクションから返されたユーザーの配列jsonデータ
              $("#user-search-result").empty();
              // 過去検索に引っかかったユーザー情報を表示しているブロックの子要素を削除する
              // empty()= DOM要素の子要素を削除する
              // 検索毎に削除しないと過去の検索結果が残ってしまうため
              if (users.length !== 0) {   //検索にヒットした情報が1件以上だったら
                  //返されたjson = データ個数分処理を繰り返す
                  users.forEach(function(user) {
                      appendUserHTML(user);
                  });
              }
              //検索にヒットした情報が何もなかったら
              else {
                  //メソッドへ文字列を渡す
                  appendUserHTML("一致するユーザーが見つかりません");
              }
          })
          //jbuilderでの変換処理に失敗したら
          .fail(function() {
              alert('ユーザー検索に失敗しました');
          })
      });
      //追加ボタンの検知
      //先頭をdocumentにしてしまうと誤作動が起きやすいので、クリックイベントを検知する範囲を絞る
      $("#user-search-result").on("click", ".chat-group-user__btn--add", function() {
  
          //addUserToMemberメソッドにて必要になる引数(材料)を準備する
          //this = 今回に到ってはクリックされた".chat-group-user__btn--add"DOM要素
          var user_id = $(this).data("user-id");
          var name = $(this).data("user-name");
  
          //「追加ボタン」を押すことでメンバー要素にユーザー情報が移動しているように見せるために、削除→追加　という工程を行う
          //押された親DOM要素を削除
          $(this).parent().remove();
          //メンバー要素へ挿入
          addUserToMember(user_id, name);
      });
  
      //メンバーブロックの削除ボタンの検知
      $("#add-member").on("click", ".chat-group-user__btn--remove", function() {
          $(this).parent().remove();
      });
  });
