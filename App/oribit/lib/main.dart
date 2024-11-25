import 'package:flutter/material.dart';
import 'package:oribit/presentation/login/login_page.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:oribit/splash_page.dart';
import 'package:provider/provider.dart';
import 'package:oribit/presentation/login/login_view_model.dart';

void main() {
  runApp(
    ScreenUtilInit(
      //디바이스의, 크기에 맞춘 위젯 설정을 위함
      designSize: const Size(360, 640), //초기 비율 설정
      minTextAdapt: true, //최소한의 Text크기
      builder: (context, child) {
        return MultiProvider(
          providers: [
            ChangeNotifierProvider(create: (_) => LoginViewModel()),
          ],
          child: MaterialApp(
            theme: ThemeData(fontFamily: "Pretendard"),
            initialRoute: '/',
            routes: {
              '/': (context) => SplashPage(),
              '/login': (context) => LoginPage(), // 홈 화면 경로
            },
            debugShowCheckedModeBanner: false,
            // 디버그 스티커 제거
            title: "orbit",
          ),
        );
      },
    ),
  );
}
