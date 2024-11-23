import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            backgroundColor: Color(0xFF121212),
            body: SizedBox(
              child: SingleChildScrollView(
                child: Center(
                  child: Column(
                    children: [
                      SizedBox(height: 50.h), // 비례 여백
                      Text(
                        "ORBIT",
                        style: TextStyle(
                            fontSize: 50.sp,
                            fontWeight: FontWeight.w900,
                            color: Colors.white),
                      ),
                      Text(
                        "무한한 상상력을 탐험하고 공유하세요.",
                        style:
                            TextStyle(fontSize: 16.sp, color: Colors.white38),
                      ),
                      Image.asset(
                        width: 210.w,
                        height: 170.h,
                        "assets/logo_no_text.png",
                      ),
                      Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Container(
                          width: 260.w,
                          height: 25.h,
                          decoration: BoxDecoration(
                            color: Color(0xFF0A0A0A), // 배경색
                            borderRadius: BorderRadius.circular(3.r),
                            border: Border.all(
                              color: Colors.white30,
                              width: 1, //
                            ),
                          ),
                          child: Center(
                              child: Text(
                            "아이디와 비밀번호로 계속하기",
                            style: TextStyle(color: Colors.white38),
                          )),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Container(
                          width: 260.w,
                          height: 25.h,
                          decoration: BoxDecoration(
                            color: Color(0xFF0A0A0A), // 배경색
                            borderRadius: BorderRadius.circular(3.r),
                            border: Border.all(
                              color: Colors.white30,
                              width: 1, //
                            ),
                          ),
                          child: Center(
                              child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Padding(
                                padding: EdgeInsets.only(right: 6.w),
                                // 오른쪽 마진
                                child: Image.asset(
                                  "assets/kakao_logo.png",
                                  width: 15.w,
                                  height: 15.h,
                                ),
                              ),
                              Text(
                                "Kakao 계정으로 계속하기",
                                style: TextStyle(color: Colors.white),
                              ),
                            ],
                          )),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Container(
                          width: 260.w,
                          height: 25.h,
                          decoration: BoxDecoration(
                            color: Color(0xFF0A0A0A), // 배경색
                            borderRadius: BorderRadius.circular(3.r),
                            border: Border.all(
                              color: Colors.white30,
                              width: 1, //
                            ),
                          ),
                          child: Center(
                              child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Padding(
                                padding: EdgeInsets.only(right: 6.w),
                                // 오른쪽 마진
                                child: Image.asset(
                                  "assets/google_logo.png",
                                  width: 15.w,
                                  height: 15.h,
                                ),
                              ),
                              Text(
                                "Google 계정으로 계속하기",
                                style: TextStyle(color: Colors.white),
                              ),
                            ],
                          )),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(4.0),
                        child: Container(
                          width: 260.w,
                          height: 25.h,
                          decoration: BoxDecoration(
                            color: Color(0xFF0A0A0A), // 배경색
                            borderRadius: BorderRadius.circular(3.r),
                            border: Border.all(
                              color: Colors.white30,
                              width: 1, //
                            ),
                          ),
                          child: Center(
                              child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Padding(
                                padding: EdgeInsets.only(right: 6.w),
                                // 오른쪽 마진
                                child: Image.asset(
                                  "assets/naver_logo.png",
                                  width: 19.w,
                                  height: 19.h,
                                ),
                              ),
                              Text(
                                "Naver 계정으로 계속하기",
                                style: TextStyle(color: Colors.white),
                              ),
                            ],
                          )),
                        ),
                      ),
                      SizedBox(
                        height: 40.h,
                      ),
                      Text(
                        "회원이 아니신가요?",
                        style: TextStyle(color: Colors.white70),
                      ),
                      Text(
                        "비밀번호 찾기",
                        style: TextStyle(color: Colors.white70),
                      ),
                      Container(
                        width: 260.w,
                        height: 30.h,
                        decoration: BoxDecoration(
                          border: Border(
                            bottom: BorderSide(
                              color: Colors.white30, // 아래쪽 테두리 색상
                              width: 0.5, // 아래쪽 테두리 두께
                            ),
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 40.h,
                      ),
                      Container(
                        width: 250.w, // 가로 크기 제한
                        height: 50.h, // 세로 크기 제한
                        child: Text(
                          "졸려요 졸려요 졸려요 졸려요 졸려요 졸려요 졸려요 졸려요 졸려요"
                          "졸려요 졸려요 졸려요 졸려요 졸려요 졸려요 졸려요 졸려요 졸려요"
                          "졸려요 졸려요 졸려요 졸려요 졸려요 졸려요 졸려요 졸려요 졸려요",
                          style: TextStyle(color: Colors.white10, fontSize: 10.sp),
                          maxLines: 3, // 최대 줄 수 제한
                        ),
                      ),
                      SizedBox(
                        height: 40.h,
                      ),
                    ],
                  ),
                ),
              ),
            )));
  }
}
