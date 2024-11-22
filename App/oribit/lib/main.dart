import 'package:flutter/material.dart';
import 'package:oribit/main_page.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

void main() {

  runApp(
    ScreenUtilInit(
      designSize: const Size(360, 640), //초기 비율 설정
      minTextAdapt: true, //최소한의 Text크기
      builder: (context, child) {
        return MaterialApp(
          debugShowCheckedModeBanner: false, // 디버그 스티커 제거
          title: "orbit",
          home: child,
        );
      },
      child: MainPage()
    ),
  );
}
