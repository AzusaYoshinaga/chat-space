class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]

  def index
  end

  def new
      @group = Group.new
      @group.users << current_user  #新規作成したgroupにログイン中のユーザーを追加
  end

  def create
     #binding.pry
      @group = Group.new(group_params)  #＠group変数はnewメソッドで作成されたログインユーザーが追加されたgroup
      if @group.save
          redirect_to root_path, notice: 'グループを作成しました'  #正常にセーブできた際はrootパスに戻ってnotice属性に指定文章を渡す        
        else
          render :new  #セーブに失敗した時は再度newメソッドの実装
      end
  end

  def edit
      # グループの「Edit」ボタンを押した際に渡ってくるparams = {"controller"=>"groups", "action"=>"edit", "id"=>"12"}
      # form_forメソッドにて使用する@group変数を定義が必要
      # ↑set_groupメソッドにて@groupを定義している
  end

  def update
     # binding.pry
      if @group.update(group_params)
          redirect_to group_messages_path(@group), notice: 'グループを編集しました'
      else
          render :edit
      end
  end

  private

  def group_params
      params.require(:group).permit(:name, { user_ids: [] })
      #require=渡されるparamsのオブジェクトを絞る(user,action,controllerなど)
      #permit=オブジェクト別に渡される値をさらに絞る
      #user_ids: [] = user_idsキーのバリューである配列の中身(groupに所属するメンバー一覧配列)を取得する。 binding.pryをかけてparamsで確認するとわかりやすい
  end

  def set_group
      @group = Group.find(params[:id])
      #findでparamsに渡ってくるキー名:idのバリューを取得
  end
end