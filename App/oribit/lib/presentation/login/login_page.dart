import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:provider/provider.dart';
import 'login_view_model.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    final loginViewModel = Provider.of<LoginViewModel>(context);
    //Provider에 등록된 LoginViewModel을 가져옴

    return SafeArea(
        child: GestureDetector(
            onTap: () {
              FocusScope.of(context).unfocus();
              // 화면의 다른 부분을 터치하면 포커스 해제
            },
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
                            style: TextStyle(
                                fontSize: 16.sp, color: Colors.white38),
                          ),
                          Image.asset(
                            width: 170.w,
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
                                child: Material(
                                    color: Colors.transparent,
                                    child: InkWell(
                                      splashColor:
                                          Colors.white24.withOpacity(0.1),
                                      highlightColor:
                                          Colors.white24.withOpacity(0.3),
                                      onTap: () {
                                        if(!loginViewModel.direct_login) {
                                          loginViewModel.directLogin = true;
                                        }else {
                                          loginViewModel.directLogin = false;
                                        }
                                      },
                                      child: Center(
                                          child: Text(
                                        "아이디와 비밀번호로 계속하기",
                                        style: TextStyle(color: Colors.white, fontSize: 11.sp),
                                      )),
                                    ))),
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
                              child: Material(
                                  color: Colors.transparent,
                                  child: InkWell(
                                    splashColor:
                                        Colors.white24.withOpacity(0.1),
                                    highlightColor:
                                        Colors.white24.withOpacity(0.3),
                                    onTap: () {
                                      print("카카오 연동");
                                    },
                                    child: Center(
                                        child: Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
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
                                          style: TextStyle(color: Colors.white, fontSize: 11.sp),
                                        ),
                                      ],
                                    )),
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
                              child: Material(
                                color: Colors.transparent,
                                child: InkWell(
                                  splashColor: Colors.white24.withOpacity(0.1),
                                  highlightColor:
                                      Colors.white24.withOpacity(0.3),
                                  onTap: () {
                                    print("구글 연동");
                                  },
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
                                        style: TextStyle(color: Colors.white, fontSize: 11.sp),
                                      ),
                                    ],
                                  )),
                                ),
                              ),
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
                                child: Material(
                                  color: Colors.transparent,
                                  child: InkWell(
                                    splashColor:
                                        Colors.white24.withOpacity(0.1),
                                    highlightColor:
                                        Colors.white24.withOpacity(0.3),
                                    onTap: () {
                                      print("네이버 연동");
                                    },
                                    child: Center(
                                        child: Row(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
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
                                          style: TextStyle(color: Colors.white, fontSize: 11.sp),
                                        ),
                                      ],
                                    )),
                                  ),
                                )),
                          ),
                          SizedBox(
                            height: 20.h,
                          ),
                          if (loginViewModel.direct_login)
                            directLogin(loginViewModel),
                          SizedBox(
                            height: 40.h,
                          ),
                          InkWell(
                            splashColor: Colors.grey.withOpacity(0.2),
                            highlightColor: Colors.grey.withOpacity(0.1),
                            onTap: () {
                              print("회원 가입 페이지로 이동");
                            },
                            child: Text(
                              "회원이 아니신가요?",
                              style: TextStyle(color: Colors.white70, fontSize: 11.sp),
                            ),
                          ),
                          InkWell(
                            splashColor: Colors.grey.withOpacity(0.2),
                            highlightColor: Colors.grey.withOpacity(0.1),
                            onTap: () {
                              print("비밀번호 찾기 페이지로 이동");
                            },
                            child: Text(
                              "비밀번호 찾기",
                              style: TextStyle(color: Colors.white70, fontSize: 11.sp),
                            ),
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
                              style: TextStyle(
                                  color: Colors.white10, fontSize: 10.sp),
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
                ))));
  }

  Widget directLogin(LoginViewModel loginViewModel) {
    return Container(
      width: 260.w,
      child: Column(
        children: [
          Align(
            alignment: Alignment.topLeft, // 왼쪽 위 정렬
            child: Text(
              "로그인",
              style: TextStyle(color: Colors.white60, fontSize: 10.sp),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(4.0),
            child: Container(
              width: 260.w,
              decoration: BoxDecoration(
                color: Color(0xFF0A0A0A), // 배경색
                borderRadius: BorderRadius.circular(3.r),
                border: Border.all(
                  color: Colors.white30,
                  width: 1, //
                ),
              ),
              child: Center(
                child: TextField(
                    style: TextStyle(
                        color: Colors.white, fontSize: 11.sp, height: 1),
                    decoration: InputDecoration(
                      border: InputBorder.none, // 기본 테두리 제거
                      hintText: "이메일을 입력해주세요.",
                      hintStyle: TextStyle(color: Colors.white54),
                      contentPadding: EdgeInsets.only(left: 8.0.w), // 왼쪽 패딩 추가
                    ),
                    onChanged: (value) {
                      loginViewModel.userEmail = value;
                    }),
              ),
            ),
          ),
          SizedBox(
            height: 5.h,
          ),
          Align(
            alignment: Alignment.topLeft, // 왼쪽 위 정렬
            child: Text(
              "비밀번호",
              style: TextStyle(color: Colors.white60, fontSize: 10.sp),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(4.0),
            child: Container(
              width: 260.w,
              decoration: BoxDecoration(
                color: Color(0xFF0A0A0A), // 배경색
                borderRadius: BorderRadius.circular(3.r),
                border: Border.all(
                  color: Colors.white30,
                  width: 1, //
                ),
              ),
              child: TextField(
                style: TextStyle(color: Colors.white, fontSize: 11.sp),
                decoration: InputDecoration(
                  border: InputBorder.none, // 기본 테두리 제거
                  hintText: "비밀번호를 입력해주세요.",
                  hintStyle: TextStyle(color: Colors.white54),
                  contentPadding: EdgeInsets.only(left: 8.0.w), // 왼쪽 패딩 추가
                ),
                onChanged: (value) {
                  loginViewModel.userPass = value;
                },
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(4.0),
            child: Container(
                width: 260.w,
                height: 25.h,
                decoration: BoxDecoration(
                  color: Colors.blueGrey, // 배경색
                  borderRadius: BorderRadius.circular(3.r),
                ),
                child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      splashColor: Colors.white24.withOpacity(0.1),
                      highlightColor: Colors.white24.withOpacity(0.3),
                      onTap: () {
                        print("직접 로그인 하기");
                      },
                      child: Center(
                          child: Text(
                        "로그인",
                        style: TextStyle(color: Colors.white, fontSize: 11.sp),
                      )),
                    ))),
          ),
        ],
      ),
    );
  }
}
