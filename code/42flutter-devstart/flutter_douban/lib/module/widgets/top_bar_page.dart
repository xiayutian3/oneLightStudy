// top_bar配置，每个页面的可以继承的基类
 
import 'package:flutter/material.dart';

class TopBarPage extends StatelessWidget{
  //定义成员变量
  final String title; //标题
  final bool hasLeading;  //导航的返回按钮
  final TabBar tabbar; //导航栏中的导航
  final Widget body;  //页面显示的内容
  TopBarPage({  //构造函数的简写形式
    Key key,
    this.title,
    this.hasLeading,
    this.tabbar,
    this.body
  }):super(key: key); //调用父类的key经行赋值


  @override
  Widget build(BuildContext context) {
    //Scaffold脚手架实现页面内容
    return Scaffold(
      appBar: title != null?AppBar(  //导航栏
        leading: hasLeading?Builder(builder: (BuildContext context){
          return IconButton(
            icon: Icon(Icons.arrow_back_ios),
            onPressed: (){  //返回按钮点击事件
              Navigator.pop(context);  //返回上一页
            },
          );
        }):null,
        title: Text( //title
          title,
          style: TextStyle(fontSize:26 ),
        ),
        bottom: tabbar, //导航
      ):null,
      body: body, //页面内容部分
    );
  }
  
}