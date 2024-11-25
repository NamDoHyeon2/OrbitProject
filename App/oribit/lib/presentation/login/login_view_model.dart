import 'package:flutter/cupertino.dart';

class LoginViewModel extends ChangeNotifier{
  String _userEmail = "";
  String _userPass = "";
  bool _directLogin = false;

  String get userEmail => _userEmail;
  String get userPass => _userPass;
  bool get direct_login => _directLogin;

  //유저 이메일 입력
  set userEmail(String value) {
    _userEmail = value;
    print(_userEmail);
    notifyListeners();
  }

  //유저 비밀번호 입력
  set userPass(String value) {
    _userPass = value;
    print(_userPass);
    notifyListeners();
  }

  //유저가 직접 로그인 할때만 나타나는 Widget상태 관리
  set directLogin(bool value) {
    _directLogin = value;
    print(_directLogin);
    notifyListeners(); // 상태 변경 알림 (UI 업데이트)
  }
}