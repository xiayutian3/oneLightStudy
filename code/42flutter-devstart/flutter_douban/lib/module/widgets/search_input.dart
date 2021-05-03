
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class SearchInput extends StatelessWidget{
  final bool isEnable;
  final void Function(String value) onSubmit;

  SearchInput({
    Key key,
    this.isEnable,
    this.onSubmit
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      height: 32,
      child: TextField(
        enabled: isEnable, //是否可以输入
        decoration: InputDecoration(
          fillColor: Colors.white,
          filled: true,
          prefixIcon: Icon(Icons.search),
          border: UnderlineInputBorder(
            borderRadius: BorderRadius.circular(19.5)
          )
        ),
        onSubmitted: onSubmit, //回调函数
      ),
    );
  }
  
}