import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class StatefulPage extends StatefulWidget{
  @override
  // 创建store，通过外部的类来创建
  _StatefulPageState createState() => _StatefulPageState();
  
}
 // 创建store的类   
class _StatefulPageState extends State<StatefulPage>{

//Globalkey的使用 ,创建，类似于dom id 的使用
GlobalKey<ScaffoldState> _globalKey = GlobalKey();

  @override
  void initState(){
    //初始化，只执行一次
    super.initState(); //调用父类的initState方法
    print('initState');
  }
  @override
  void didChangeDependencies(){
    //依赖发生变化的时候，系统的语言，主题发生变化的时候
    super.didChangeDependencies();
    print('didChangeDependencies');
  }
  @override
  void didUpdateWidget(StatefulPage oldWidget){
    //发生更新的时候调用
    //canupdate返回true，会被调用
    super.didUpdateWidget(oldWidget);
    print('didUpdateWidget');
  }

  @override
  void deactivate(){
    //页面退出，state被移除的时候
    super.deactivate();
    print('deactivate');
  }
  @override
  void dispose(){
    //永久被移除的时候
    //state对象在widget树中永久被移除的时候
    super.dispose();
    print('dispose');
  }

  //只在debug模式下执行
  @override
  void reassemble(){
    super.reassemble();
    print('reassemble');
  }

// ****************生命周期变化顺序*********
// 进入的时候
// initState
// didChangeDependencies
// build

// 更新的时候
// reassemble
// didUpdateWidget
// build


//离开的时候
//deactivate
// dispose


// golbalkey，绑定内部状态执行一些方法
_handleClick(){
  // showSnackBar 准备移除这个api
  _globalKey.currentState.showSnackBar(SnackBar(content:Text('this is a snackbar')));
}


  @override
  Widget build(BuildContext context) {  //以下是页面显示的内容
  print('build');
  // 使用Scaffold 脚手架创建页面
    return Scaffold(
      key: _globalKey, //绑定golbalkey，绑定内部状态执行一些方法
      appBar:AppBar(
        title: Text('stateful'),
      ),
      body: Center(
        child: Container(   //组合类容器，里面有很多属性，
          width: 100,
          height: 100,
          margin: EdgeInsets.only(top:100),
          decoration: BoxDecoration(   //修饰，样式修饰
            boxShadow: [
              BoxShadow(
                color: Colors.grey,
                offset: Offset(4,4),
                blurRadius: 4
              )
            ]
          ),
          child: Text('this is text'),
        )
      ),





      // body: Center(
      //   child:Transform.rotate(  //变化类组件
      //     angle: 120,
      //     child: Container(  //组合类容器
      //       child: Text('this is text'),
      //     ),
      //   )
      // ),




      // body: SizedBox(  //限制类组件,作用于子元素,固定盒子大小
      //   width: 40,
      //   height: 40,
      //   child: Container(color: Colors.amberAccent,),
      // ),





      // body: ConstrainedBox(  //限制类组件,作用于子元素
      //   constraints: BoxConstraints(
      //     minWidth: double.infinity,  //无限大
      //     minHeight: 100
      //   ),
      //   child: Container(
      //     height: 40,  //40小于100，不起作用，最小值是100类似于css的min-height
      //     color: Colors.greenAccent,
      //   ),
      // ),




      // body: Padding(  //填充组件，相当于一个容器
      //   padding: EdgeInsets.fromLTRB(40, 60, 10, 80),
      //   child: Container(
      //     color:Colors.green
      //   ),
      // ),


      // body: ConstrainedBox( //对组件大小，进行约束。
      //     //尽可能的扩展
      //   constraints: BoxConstraints.expand(),
      //   child: Stack(       //层叠布局
      //     alignment: Alignment.center,
      //     children: <Widget>[
      //       Container(
      //         child: Text(
      //           'this is container',
      //           style: TextStyle(color: Colors.deepOrangeAccent),
      //         ),
      //       ),
      //       Positioned(
      //         left:20,
      //         child: Text('this is text')
      //       ),
      //       Positioned(
      //         top:40,
      //         child: Text('this is text22')
      //       )
      //     ],
      //   ),  
      // ),

      // body: Container(
      //   child: Center(
      //      child: Flex(  //弹性布局
      //      direction: Axis.vertical, //布局的方向
      //      children: <Widget> [
      //        Expanded(
      //          flex: 2,  //弹性布局系数
      //          child: Column(
      //          children: <Widget> [
      //             Text(        //Text的详细使用
      //               'this is stateful page1',
      //               style: TextStyle(    
      //                 color: Colors.red,
      //                 fontSize: 30,
      //                 background: Paint()..color = Colors.amber
      //                 ),
      //             ),
      //             RaisedButton(         //按钮组件
      //               child: Text('悬浮按钮'),
      //               onPressed: (){},
      //             ),
      //             FlatButton(
      //               child: Text('扁平按钮'),
      //               onPressed: (){},
      //             ),
      //             OutlineButton(
      //               child: Text('边框按钮'),
      //               onPressed: (){},
      //             ),
      //           ]
      //        ),),
      //        Expanded(child: Container(
      //          width: 50,
      //          color: Colors.amberAccent,
      //       ),),
      //      ]
      //     ),





      //     // child: Column(  //列式布局
      //     //   mainAxisAlignment: MainAxisAlignment.center, //主轴的对齐方式
      //     //   children: <Widget> [
      //     //     Text(        //Text的详细使用
      //     //       'this is stateful page1',
      //     //       style: TextStyle(    
      //     //         color: Colors.red,
      //     //         fontSize: 30,
      //     //         background: Paint()..color = Colors.amber
      //     //         ),
      //     //     ),
      //     //     RaisedButton(         //按钮组件
      //     //       child: Text('悬浮按钮'),
      //     //       onPressed: (){},
      //     //     ),
      //     //     FlatButton(
      //     //       child: Text('扁平按钮'),
      //     //       onPressed: (){},
      //     //     ),
      //     //     OutlineButton(
      //     //       child: Text('边框按钮'),
      //     //       onPressed: (){},
      //     //     ),
      //     //   ]
      //     // ),

          
      //     // child: Text(        //Text的详细使用
      //     //   'this is stateful page1',
      //     //   style: TextStyle(    
      //     //     color: Colors.red,
      //     //     fontSize: 30,
      //     //     background: Paint()..color = Colors.amber
      //     //     ),
      //     // ),
      //   ),
      // ),
      floatingActionButton: FloatingActionButton(
        onPressed: _handleClick,
        tooltip: 'Increment',
        // child: Icon(Icons.add),
        child: Image(
          width: 40,
          height: 40,
          fit: BoxFit.cover,
          image: NetworkImage('https://video.dsconsulting.com/dswebsite_2020/logo.png')
        )
      ),
    );
  }
  
}