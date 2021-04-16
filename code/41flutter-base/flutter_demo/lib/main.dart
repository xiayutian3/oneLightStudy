import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

//枚举类型 作为key
enum Person {boy,girl}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
  //变量
  // int a = 1;
  //  print(a);
  
  // 基本类型 ：bool,num(init&double) String enum
 
  // String str = "hello";
  //  print(str);

  //泛型：数组List，对象Map
  // List<int> arr = [1,2,3,4,5];
  // Map<int,String> obj = {
  //   1:'str',
  //   3:'ss'
  // };


  // dynamic,Object赋值的变量可以改变成任意类型.,但是变量只能拥有对应类型上的方法
  
  // dynamic b = 1;
  // b = "sdf";
  // Object c = 1;
  // c = "jlk";
  //编译时不会报错，运行时就会报错
  // dynamic f = true;
  // print(f.length);
  
  // print(b);
  // print(c);
 


  // 控制流语句
  // debug模式下，只能接受bool类型
  // release模式下，除了bool类型，都认为false
  // 
  // if(true){
  //   print(1);
  // }else{
  //   print(2);
  // }

  // var command = 'OPEN';
  // switch (command) {
  //   case 'OPEN':
  //     // executeOpen();
  //     break;
  //   default:
  //     // executeUnknown();
  //     break;
  // }
  
  
  // List<int> arr = [1,2,3];
  // for(int n in arr){
  //   print(n);
  // }

  // for(int i = 0;i<arr.length;i++){
  //   print(arr[i]);
  // }
  // int n = 0;
  // while(n<arr.length){
  //   print(n);
  //   n++;
  // }
  // 
  
  // // 函数 switch continue跳转语句
  // bool isBoy(Person penson){
  //   switch (penson) {
  //     case Person.boy:
  //       print(true);
  //       continue Label_case;
  //       return false;
  //     case Person.girl:
  //       return false;
  //       break;
  //     Label_case:
  //     case Person.boy:
  //       print('第二次执行');
  //       return false;
  //     default:
  //       return false;
  //       break;
  //   }
  // }

  // isBoy(Person.boy);
  

  // dart中函数
  // 无声明返回值，默认dynamic
  // 返回值没有类型判断
  // add(int a,int b){
  //   return a+b;
  // }
  // 函数简写
  // int add(int a,int b)=>a+b;
  //可选位置参数，可选命名参数
  // int add(int a,[int b])=>a+b; // [int b] 可选位置参数 调用  add(1) add(1，2)
  // int add(int a,{int b})=>a+b;  //{int b} 可选命名参数 调用add(1) add(1，b:2) 
  // print(add(1,b:2));
  























    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
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
