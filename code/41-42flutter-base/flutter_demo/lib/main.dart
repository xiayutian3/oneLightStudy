import 'dart:async';
import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:random_string/random_string.dart';

// void main() {
//   runApp(MyApp());
// }
// 
// 
// try catch  捕获错误也行
// 
// 
// 捕获错误
void main() {
  FlutterError.onError = (FlutterErrorDetails details){
    //错误。日志的收集
    print('flutter catch error $details');
  };
  runZonedGuarded(
    ()=>runApp(MyApp()),
    //错误信息收集，堆栈信息收集
    (Object obj,StackTrace stack){
      //错误。日志的收集
      print('flutter catch error:$obj,\n$stack');
    }
  );
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
      //注册路由表，不需要参数的路由,,不能进行路由传参
      routes: {
        '/new_page':(context)=>NewPage()
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
    //调试
    print(randomBetween(10, 20));  //调试1
    //调试2
    debugger();
    // 
    // //调试3
    // flutter devices
    // flutter run -d 型号

    // setState(() {
    //   _counter++;
    // });
    
    //路由跳转
    // Navigator.push(context, MaterialPageRoute(builder: (context){
    //   return NewPage();
    // }));
    // 
    // 注册路由表的跳转(另一种方式),不能进行路由传参
    Navigator.pushNamed(context, '/new_page');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          // Column is also a layout widget. It takes a list of children and
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
        // child: Icon(Icons.add),//系统自带图标
        // 自定义图标
        child:Image(
          width: 40,
          height: 40,
          image: AssetImage('lib/images/btn.jpg'),
        ),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}



class NewPage extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('new page')
      ),
      body: Center(child: Text('this is new page')),
    );
  }
  
}

// MaterialPageRoute
// 
//   集成自PageRoute（抽象类，占有整个屏幕控件的路由页面）
//   定义路由构建及切换时的过度动画的相关接口和属性
//   参数
//     builder：（required）回调函数，路由页面的具体内容
//     setting：配置信息，路由名称，是否初始路由
//     maintainState：保持原有状态在内容
//     fullsrceenDialog：是否是全屏对话框