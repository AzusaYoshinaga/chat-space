// $(document).on("turbolinks:load", function() {
//   //htmlタグ配下の要素を全部読み込む
//   //⑤構築したHTMLをViewに差し込む
//   //buildHTML関数を定義

//   function buildHTML(message) {
//       //三項演算子の応用( 代入する変数 = 条件式 ? true : false)
//       //取得してきたmessage情報に画像情報がnullじゃなければイメージタグを生成、nullだったら何も生成しない
//       var img = (message.image !== null) ? `<img class="lower-message__image" src="${ message.image }">` : "" ;
//       //data-group-id = 画面ごとの関数実行有無のif文にて使用するために用意しておく(HTMLファイルも同様)
//       var html = `<div class="message" data-id="${ message.id }" data-group-id="${ message.group_id }" data-created_at="${ message.created_at }">
//                       <div class="upper-message">
//                           <div class="upper-message__user-name">
//                           ${ message.user_name }
//                           </div>
//                           <div class="upper-message__data">
//                           ${ message.date }
//                           </div>
//                       </div>
//                       <div class="lower-message">
//                           <p class="lower-message__content">
//                           ${ message.content }
//                           </p>
//                           ${ img }
//                       </div>
//                   </div>`
//       return html;        //返り値として生成したHTML要素を返す
//   }

//自動更新大枠

// var reloadMessages = function() {
//   //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
//   last_message_id = $('.message:last').data("message-id");
//   $.ajax({
//     //ルーティングで設定した通りのURLを指定
//     url: "api/messages",
//     //ルーティングで設定した通りhttpメソッドをgetに指定
//     type: 'get',
//     dataType: 'json',
//     //dataオプションでリクエストに値を含める
//     data: {id: last_message_id}
//   })
//   .done(function(messages) {
//     if (messages.length !== 0) {
//     //追加するHTMLの入れ物を作る
//     var insertHTML = '';
//     //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
//     $.each(messages, function(i, message) {
//       insertHTML += buildHTML(message)
//     });
//     //メッセージが入ったHTMLに、入れ物ごと追加
//     $('.messages').append(insertHTML);
//     $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
//   }
//   })
//   .fail(function() {
//     console.log('error');
//   });
// };
// if (document.location.href.match(/\/groups\/\d+\/messages/)) {
//   setInterval(reloadMessages, 7000);
// }
// });
  






// // .done(function(messages) {
// //   //追加するHTMLの入れ物を作る
// //   var insertHTML = '';
// //   //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
// //   $.each(messages, function(i, message) {
// //     insertHTML += buildHTML(message)
// //   });
// //   //メッセージが入ったHTMLに、入れ物ごと追加
// //   $('.messages').append(insertHTML);
// // })

// //if (document.location.href.match(/messages/)){




//     //reloadMessages関数のスコープ外にsetIntervalを定義することが重要となる
//     //? 上記の理由はなぜか？
//    //setInterval= 一定時間の間隔で処理を実行可能(行いたい処理, 時間間隔)
// //reloadMessagesが発火しないから
// //setinterval => {reloadMessages => reloadMessages}
// //reloadMessages {setInterval{reloadMessages {setInterval{reloadMessages}}}}



// //? = locationとは？、pathnameとは？
// //現在ページURLのパス名を参照する
// //pathnameはURLのパス部分を取得することができる機能を持っており、別のパスに差し替えることも可能です。
// //locationに対してpathnameを記述するだけで取得することが可能
// //別のパスを代入することで画面遷移させることもできます。



// //? messages変数の中身とは？
// //message, data-clearted-at, data-group-id, data-id



// //? failが実行されるということは何が起こったか

// //json.array! @users do |user|
// //json.id       user.user.id     #userが重複
// //json.nickname user.mickname    #カラム名の間違い or 存在しないカラム名の指定(mickname)
// //json.nickname @users.nickname  #変換する変数名が違う
// //end

// //カラム名の記述ミスや存在しないテーブルの参照など、記述をよく観察すると発見できるミスが多いです。
// //他にもコントローラファイル→json.jbuilderへと参照させるためにコントローラ内に記述が必要なrespond_toが抜けていたりすると適切な変換ファイルが参照されずfailメソッドが実行されてしまいます。
// //json.jbuilderファイルの記述に間違いがなさそうであれば処理の流れを遡ってコントローラで定義した変数が怪しいと考えましょう



// ///reloadMessages関数のスコープ外にsetIntervalを定義することが重要となる
// //? 上記の理由はなぜか？

// //「スコープ」というのは変数が利用できる範囲のことで、関数内で宣言した変数と関数外で宣言した変数では扱える範囲が異なるのです。
// //関数内で宣言された変数は関数内でしか利用できず、関数外で宣言された変数は関数内でも利用できる



// // //SENDボタンの連打防止(3秒後にdisabled解除)
// // //prop()= 要素のプロパティを取得する
// // //「disabled」は、指定したHTML要素を無効化できる属性です。
// // //prop()」メソッドを使うと、「button.prop( ‘disabled’, true)」でボタンは無効になり、
// // //「button.prop( ‘disabled’, false)」でボタンは有効になります。
// // var self = this;
// // $(".form__submit", self).prop("disabled", true);
// // setTimeout(function() {
// // $(".form__submit", self).prop("disabled", false);
// // }, 3000);
// // console.log($(".form__submit", self)[0]);
// // console.log($(".form__submit")[0]);

// // //   //ページ最下部へスクロールする
// //     function scroll_view() {
// //         scrollTop = 要素をスクロールさせるピクセル数を取得または設定(初期値=0)
// //         scrollHeight = 要素の高さを取得(要素のpaddingのみ含まれる)
// //         $(".messages") = JQueryオブジェクト
// //         $(".messages")[0] = DOM要素(JS),document.querySelector('.messages');と同様オブジェクト
// //         $(".messages").animate({ scrollTop:$(".messages")[0].scrollHeight }, 500, 'swing');
// //     }


// //   //①フォームの送信が行われたときにAjaxによる非同期通信を始める(ためのイベントハンドラ)
// //   $("#new_message").on("submit", function(e) {
// //       e.preventDefault();
// //       console.log('done')
      
// //       //①-1, フォームに入力された値を取得
// //       var formData = new FormData(this);
// //       // FormData= フォームのデータの送信に使用可能
// //       //引数がthisのため、id=new_messageのフォームタグのフォーム情報
// //       var url = $(this).attr('action')
// //       //attr= 要素が持つ指定属性の値を返す  実際の返り値= action="/groups/1/messages"
//       //指定した属性がなければundefinedが返ってくる


//       //①-2, Ajaxをするために必要な情報の準備をする
//       $.ajax({
//           url: url,           //リクエストを送信する先のurl(/groups/1/messages)
//           type: 'POST',       //HTTP通信の種類を記述
//           data: formData,
//           timeout : 30000,      //サーバーからの返信が30秒経ってもないときはタイムアウト設定
//           dataType: 'json',
//           processData: false,
//           // デフォルトはtrue、dataに指定したオブジェクトをクエリ文字列に変換する役割
//           // クエリ文字列= WebブラウザなどがWebサーバに送信するデータをURLの末尾に特定の形式で表記したもの
//           contentType: false
//           //デフォルトはtext/xml、サーバーへデータのファイル形式を伝えるヘッダ。コンテンツタイプをXMLとして返してくる設定
//           //今回はdataがformDataで適切な値のため、falseにすることで設定の上書きを防いでいる。
//       })
//       //上記通信内容：通信方法＝POST, /groups/1/messagesというURLに,テキストフィールドに入力された値を送信する,サーバーから送信を返す際はjson形式とする
//       //②messagesコントローラのcreateアクションでmessageの保存を行う ※要は、DBにmessageデータを登録する
//       //③ ②の処理後にjsonを返す
//       //④非同期通信の終了後にコントローラから受け取ったjsonを利用してHTMLを構築する


//       //非同期通信に成功した時
//       .done(function(message) {
//           var html = buildHTML(message);
//         //   $('.messages').append(html);
//           $("#new_message")[0].reset();      //入力テキスト,画像データをリセット(送信データ関係をリセットできる)
//           scroll_view()
//       })
//       //失敗したとき
//       .fail(function() {
//           alert('error');
//       });
//   });
// });










//カリキュラム(編集しよう)
//スクロールを行うにはjQueryのanimate関数を利用します。以下のように編集しましょう。
//コードを追加する場所は、非同期通信が成功した場合行う処理の最後がよいでしょう。
//また更新するメッセージがなかった場合は.doneの後の処理が動かないよう、条件分岐を追加しています。
//さらに、フォームの中身を空にして、フォームを再度送信できるようにする処理も追記しています。


// $(function() {
//   //省略
  
//     var reloadMessages = function() {
//       //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
//       last_message_id = $('.message:last').data("message-id");
//       $.ajax({
//         //ルーティングで設定した通りのURLを指定
//         url: "api/messages",
//         //ルーティングで設定した通りhttpメソッドをgetに指定
//         type: 'get',
//         dataType: 'json',
//         //dataオプションでリクエストに値を含める
//         data: {id: last_message_id}
//       })
//       .done(function(messages) {
//         if (messages.length !== 0) {
//           //追加するHTMLの入れ物を作る
//           var insertHTML = '';
//           //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
//           $.each(messages, function(i, message) {
//             insertHTML += buildHTML(message)
//           });
//           //メッセージが入ったHTMLに、入れ物ごと追加
//           $('.messages').append(insertHTML);
//           $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
//         }
//       })
//       .fail(function() {
//         console.log('error');
//       });
//     };
//   });






// //  :last  jQuery   
// //  構文 $(":last")  ver1.0〜
// //  機能 :（コロン）に続けてlastを設定すると最後の要素を選択します。
// //  解説   単独では利用しません
// //  サンプル（last/01.html）を開いてbody内にdiv要素が4つあることを確認してください。
// //  jQueryは以下の様に記述され、buttonをクリックすると最後の要素を選択するようにしています。
// //  選択した要素はcssメソッドを利用してボーダーを表示しています。

// // $("button").click(function(){
// //	$(":last").css("border","3px solid red");
// // });

// // 結果として、buttonをクリックするとhtml内の最後の要素であるbuttonが選択され赤枠が表示されます。
// // :firstと同様に単独で利用することはないでしょう。


// //ページ全体を通しての最初です
// //要素はページ内を通してインデックス番号で管理されます。
// //サンプル（last/03.html）を開いてbody内にol要素とul要素の２つのリストがあることを確認して下さい。
// //各リストにはli要素が5つづつあります。

// //jQueryは以下の様に記述され、buttonをクリックするとli要素の最後の要素を選択しcssメソッドを利用して背景色をピンクにします。

// // $("button").click(function(){
// //	$("li:last").css("background-color","#FCC");
// // });

// //ul要素とol要素は異なるリストですが、li要素はulとolで共通のためul/olを通して連続したインデックス番号が設定されます。
// //その結果、buttonをクリックするとul要素の最後のli要素が選択され、背景色がピンクになります。


// //ol要素内にある最最後のli要素を選択するには？
// //ではol要素の中にある最後のli要素を選択したい場合はどうすればよいのでしょうか？
// //サンプル（last/04.html）を開いてbody内の構成を確認してください。
// //li要素のテキストが異なるだけで、それ以外はサンプルlast/03.htmlと同じになっています。

// //jQueryは以下の様に記述され、buttonをクリックすると>（子要素）を利用して、ol要素の直下にあるli要素の最後の要素を選択するようにしました。

// // $("button").click(function(){
// //	$("ol>li:last").css("background-color","#FCC");
// // });

// // サンプルlast/04.htmlではol要素内にli要素しかないので、liの記述は省略しても同じです。
// //サンプル（last/04b.html）を開いてjQueryが以下の様に変更されていることを確認して下さい。
// //しかし選択される要素はサンプルlast/04.htmlと同じになります。

// // $("button").click(function(){
// //	 $("ol>:last").css("background-color","#FCC");
// // });

// //関連項目
// //最初の要素を選択する:firstと合わせて覚えると良いでしょう。
// //要素ごとに最後の要素を選択したい場合（サンプルではolとulの最後のliを両方まとめて選択したい場合）は
// //:last-childを利用すると便利です。

// //メモ 
// //最後の要素を選択したい対象が、すでにjQueryオブジェクトになっている場合は
// //Traversingのlast()を利用したほうが高速に処理できます。
// //詳細はlast()ページの「メモ」を確認してください。








































