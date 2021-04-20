
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

// StatelessWidget 静态组件
class StatelessPage extends StatelessWidget{
  final String text; //成员变量
  /*
   * final
   *  常量只能被初始化一次，值可以在运行时确定下来
   *  final指向的引用变量不可以改变，但是如果引用变量的值如果不是常量，可以改变
   *  必须初始化，在构造函数中
   * 
   * const
   *  类中只用静态成员才能使用const进行修饰，值编译时确定下来
  */
  StatelessPage({
    Key key,
    this.text
  }):super(key: key); //调用父类的key经行赋值
  @override
  Widget build(BuildContext context) {
    //页面的构建
    //Scaffold脚手架
    return Scaffold(
      appBar: AppBar(
        title: Text('this is stateless page')
      ),
      body: Center(
        child: Container(
          child: Text(text),
        ),
      ),
    );
  }

}