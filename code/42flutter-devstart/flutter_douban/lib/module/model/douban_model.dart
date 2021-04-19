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
}