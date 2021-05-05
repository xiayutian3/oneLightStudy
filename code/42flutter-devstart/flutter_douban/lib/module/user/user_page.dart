import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class UserPage extends StatefulWidget {
  @override
  _UserPageState createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  DateTime _lastTime;

  ScrollController _controller = ScrollController();
  bool _isShow = false;
  @override
  void initState() {
    super.initState();
    _controller.addListener(() {
      // print(_controller.offset);

      if (_controller.offset < 300) {
        setState(() {
          _isShow = false;
        });
      } else {
        setState(() {
          _isShow = true;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(  //导航拦截组件，功能型组件，不行ui界面
      onWillPop: () async { //异步方法
        if(_lastTime != null && DateTime.now().difference(_lastTime)>Duration(seconds:1)){
          return true;
        }
        _lastTime = DateTime.now();
        return false;
      },
      child: Scaffold(
        appBar: AppBar(title: Text('this is user page')),
        body: ListView.builder(
            //列表
            controller: _controller,
            itemCount: 30,
            itemBuilder: (BuildContext context, int index) {
              return ListTile(
                title: Text('this is list$index',
                style: TextStyle(color: Theme.of(context).primaryColor), //使用我们定义的主题色
                )
              );
            }),
        floatingActionButton: _isShow
            ? FloatingActionButton(
                //悬浮按钮
                child: Icon(Icons.arrow_upward),
                onPressed: () {
                  _controller.animateTo(0,
                      duration: Duration(milliseconds: 500),
                      curve: Curves.ease);
                })
            : null,
      ),
    );

    // Scaffold(
    //   appBar: AppBar(title: Text('this is user page')),
    //   // body:GridView.count(   //GridView.count 简写的方式
    //   //   crossAxisCount: 4,
    //   //   childAspectRatio: 1.0,
    //   // // GridView(  //不简写的形式
    //   // //   gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
    //   // //       crossAxisCount: 3, childAspectRatio: 1.0),
    //   //   children: <Widget>[
    //   //     Icon(Icons.ac_unit),
    //   //     Icon(Icons.ac_unit_sharp),
    //   //     Icon(Icons.access_alarms_rounded),
    //   //     Icon(Icons.alarm),
    //   //   ],
    //   // ),

    //   body: ListView.builder(
    //       //列表
    //       controller: _controller,
    //       itemCount: 30,
    //       itemBuilder: (BuildContext context, int index) {
    //         return ListTile(title: Text('this is list$index'));
    //       }),
    //       floatingActionButton: _isShow?FloatingActionButton(  //悬浮按钮
    //         child: Icon(Icons.arrow_upward),
    //         onPressed: (){
    //           _controller.animateTo(0, duration: Duration(milliseconds:500), curve: Curves.ease);
    //         }
    //       ):null,

    //   // body: ListView.separated( //列表，带分割线
    //   //   itemCount: 20,
    //   //   itemBuilder: (BuildContext context,int index){
    //   //     return ListTile(
    //   //       title:Text('this is list$index')
    //   //     );
    //   //   },
    //   //   separatorBuilder: (BuildContext context,int index){ //分割线
    //   //     return Container(
    //   //       height: 1,
    //   //       color: Colors.blueAccent,
    //   //     );
    //   //   },
    //   // ),
    // );
  }
}
