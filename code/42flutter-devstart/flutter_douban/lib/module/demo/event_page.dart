//元素拖动

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class EventPage extends StatefulWidget{
  @override
  _EventPageState createState() => _EventPageState();
  
}
class _EventPageState extends State<EventPage>{
  double _top=0.0;
  double _left = 0.0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:Text('this is page')
      ),
      body: Center(
        child:Stack(
          children: <Widget>[
            Positioned(
              top: _top,
              left: _left,
              child: GestureDetector( //手势操作
                child: CircleAvatar(child: Text('圆形'),),
                onPanDown: (DragDownDetails e){   //拖动开始事件
                  print('location:${e.globalPosition}');
                },
                onPanUpdate: (DragUpdateDetails e)=>{ //拖动更新事件
                  setState((){
                    _left += e.delta.dx;  //距离
                    _top += e.delta.dy;
                  })
                },
                onPanEnd: (DragEndDetails e){  //拖动结束事件
                  print('拖动结束');
                },
              ) 
            )
          ],
        )
      ),
    );
  }
  
}








// 事件、手势处理

// import 'package:flutter/cupertino.dart';
// import 'package:flutter/material.dart';

// class EventPage extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {

//       return Scaffold(
//         appBar: AppBar(
//           title:Text('event page demo')
//         ),
//         body: Center(
//           child:GestureDetector( //手势识别
//             child: Container(
//               width: 200,
//               height: 200,
//               color: Colors.grey,
//             ),
//             onTap: ()=>print('onTap'),
//             onDoubleTap: ()=>print('onDoubleTap'),
//             onLongPress: ()=>print('onLongPress'),
//           )
//         ),
//       );



//     // return Container(
//     //   child: Stack( //层叠布局
//     //     children: <Widget>[
//     //       Listener(
//     //         child: ConstrainedBox(
//     //           constraints: BoxConstraints.tight(Size(300, 150)),
//     //           child: DecoratedBox(
//     //             decoration: BoxDecoration(color: Colors.green),
//     //           ),
//     //         ),
//     //         onPointerDown: (event) => {
//     //           //按下事件
//     //           print('event down bottom')
//     //         },
//     //         // behavior: HitTestBehavior.opaque, //点击其他区域也生效
//     //       ),
//     //       Listener(
//     //         child: ConstrainedBox(
//     //           constraints: BoxConstraints.tight(Size(300, 150)),
//     //           child: Center(child: Text('this is top box')),
//     //         ),
//     //         onPointerDown: (event) => {
//     //           //按下事件
//     //           print('event down top')
//     //         },
//     //         // behavior: HitTestBehavior.opaque, //点击其他区域也生效
//     //         behavior: HitTestBehavior.translucent,  //点击空白区域 top bttom 都触发
//     //       ),
//     //     ],
//     //   ),
//     // );

//     // return Container(
//     //   child: Listener(
//     //     child: ConstrainedBox(
//     //       constraints: BoxConstraints.tight(Size(300,150)),
//     //       child: Center(
//     //         child:Text('this is box')
//     //       ),
//     //     ),
//     //     onPointerDown: (event)=>{  //按下事件
//     //       print('event down')
//     //     },
//     //     behavior: HitTestBehavior.opaque,  //点击其他区域也生效
//     //   ),
//     // );
//   }
// }
