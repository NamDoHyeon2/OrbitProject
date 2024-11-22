import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class MainPage extends StatefulWidget {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  @override
  Widget build(BuildContext context) {

    return Scaffold(
        backgroundColor: Color(0xFF121212),
        body: Center(
          child: Image.asset(
            'assets/logo.png',
            width: 190.w,
            height: 190.h,
          ),
        )
    );
  }
}
