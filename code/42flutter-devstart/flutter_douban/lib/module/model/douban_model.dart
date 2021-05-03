//用来判断类型
//
enum ListSort {Movie,Book,Music}

class AppModel {
  static String getListTitle(ListSort item){
    if(item == ListSort.Movie){
      return '电影';
    }else if (item == ListSort.Book) {
      return '图书';
    }else{
       return '音乐';
    }
  }

  static List<String> getTabList(ListSort item){
    if(item == ListSort.Movie){
      return ['近期热门','猜你喜欢','豆瓣热门'];
    }else if (item == ListSort.Book) {
      return ['新书速递','今日推荐','豆瓣热门'];
    }else{
       return ['新碟榜','豆瓣热门'];
    }
  }
}