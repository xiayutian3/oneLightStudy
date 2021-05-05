import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

///异步组件，异步任务
class FuturePage extends StatelessWidget {
  Future<String> _getNetWorkData() {
    return Future.delayed(Duration(seconds: 2), () {
      return 'this is net data';
    });
  }

  Stream<int> _getCount(){  //循环定时器
    return Stream.periodic(Duration(seconds: 1),(index){ // index 从0开始往上 +
      return index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      //streambuilder 网络下载 存储  ，多次异步行为
      child: StreamBuilder(
        stream: _getCount(),
        builder: (BuildContext context, AsyncSnapshot<int> snapshot) {
          if (snapshot.hasError) {
            return Text('this is error data');
          } else {
            switch (snapshot.connectionState) {
              case ConnectionState.none:
                return Text('no stream');
                break;
              case ConnectionState.waiting:
                return Text('waiting');
                break;
              case ConnectionState.active:
                return Text('active${snapshot.data}');
                break;
              case ConnectionState.done:
                return Text('stream done');
                break;
              default:
                return Text('stream done');
                break;
            }
          }
        },
      ),

      // child: FutureBuilder(
      //   future: _getNetWorkData(),
      //   // 处理异步的一些状态信息,根据不同的阶段，显示不同的ui
      //   builder: (BuildContext context,AsyncSnapshot snapshot){
      //     if(snapshot.connectionState == ConnectionState.done){ //请求是否已经完成
      //       if(snapshot.hasError){ //是否有错误
      //         return Text('this is err data');
      //       }else{
      //         return Text('this is true data');
      //       }
      //     }else{
      //       //显示loading
      //       return CircularProgressIndicator();
      //     }
      //   },
      // ),
    );
  }
}
