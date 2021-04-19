import 'package:flutter/cupertino.dart';
import 'package:flutter_douban/module/model/douban_model.dart';

class ListPage extends StatefulWidget{
  final ListSort item;  //final定义的变量 要在构造函数中初始化
  ListPage({  //构造函数简写形式
    Key key,
    this.item
  });
  @override
  _ListPageState createState() => _ListPageState();
  
}
class _ListPageState extends State<ListPage>{
  @override
  Widget build(BuildContext context) {
    //获取传入的值
    print(AppModel.getListTitle(widget.item));
    
    return Center(
      child: Text('this is list page'),
    );
  }
  
}