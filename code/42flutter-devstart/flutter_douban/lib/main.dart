import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_douban/module/bot_nav_bar/bot_nav_bar.dart';
import 'package:flutter_douban/module/demo/stateful_page.dart';
import 'package:flutter_douban/module/demo/stateless_page.dart';
import 'package:flutter_douban/module/list/list_page.dart';
import 'package:flutter_douban/module/model/douban_model.dart';
import 'package:flutter_douban/module/search/search_page.dart';

import 'module/home/home_page.dart';

// void main() {
//   runApp(MyApp());
// }

//错误捕获 终极捕获）
void main() {
  FlutterError.onError = (FlutterErrorDetails details){
    //错误 日志 收集，上传服务器等
    print('flutter catch error $details');
  };
  //沙箱
  runZonedGuarded(
    () => runApp(MyApp()), 
    //错误收集 obj错误信息  stack错误堆栈信息
    (Object obj,StackTrace stack){
      print('flutter catch errors $obj , $stack');
    }
   );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(  //主题色
        // primarySwatch: Colors.blue, //底部导航
        primaryColor: Colors.red,  //主题，头部，底部导航
      ),
      // home: MyHomePage(title: 'Flutter Demo Home Page'), 
      // 切换首页
        home: BotNavBar(),
      //这里注册的路由不可以传参
      routes: {
        '/search':(context) => SearchPage()
      },
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    // 路由跳转 不带参数
    // Navigator.pushNamed(context, '/search');
    //路由跳转 带参数
    Navigator.push(context, MaterialPageRoute(builder: (context){
      // return ListPage(item: ListSort.Movie);
      
      // //跳转   statelessPage
      // return StatelessPage(text: '我是传递过来的值',);

       //跳转   statefulPage
      return StatefulPage();
    }));
    
    // setState(() {
    //   _counter++;
    // });
  }

  @override
  Widget build(BuildContext context) {
    //ios 风格
    // return CupertinoPageScaffold(
    //   navigationBar: CupertinoNavigationBar(middle: Text('this is ios cuper'),
    //   // child: Center(
    //   //   child:  
    //   // ),
    //   ),
    // );


    //安卓风格
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
