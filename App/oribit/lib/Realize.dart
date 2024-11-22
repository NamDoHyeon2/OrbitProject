/*
  StatefulWidget 의 동작방식
  1. StatefulWidget을 상속받은 Widget은 생성될때, 프레임워크 측에서, State(상태)객체를 요구한다.
  2. Widget은 그 객체를 주기 위해서, StatefulWidget에 정의되어있는 createState() 메소드를 호출하고, 해당 객체를 return 한다.
  3. 리턴할 객체는 사용자가 State(상태) 클래스를 상속받은 class를 정의하여 return 한다.
 */

/*
  MaterialApp : Material Design 스타일을 적용한 Flutter앱의 기본 구조를 정의

  -title : 앱의 이름
  -home : 최초화면, 위젯
  -theme : 앱의 테마 설정
  -darkTheme : 다크 모드에서 사용할 테마 //themMode와 함께 사용
  -themeMode : 앱에서 사용할 테마를 선택
  -routes : 앱 내의 경로와 화면을 정의
  -initialRoute : 앱 실행시 처음 표시할 라우트를 지정 //routes와 함께 사용
  -onGenerateRoute : 동적으로 라우트 생성, 복잡한 경로 처리
  -local : 앱의 기본언어 설정
  -localizationsDelegates : 앱의 현지화를 위한 설정
  -navigatorKey : 네비게이터를 제어 할 때 사용하는 키
  -debugShowCheckedModeBanner : 디버그 모드에서 표시되는 배너를 숨길 수 있다.
  -builder : 앱의 기본적인 위젯트리를 커스터마이즈 할 때 사용
  -scrollBehavior : 스크롤 동작을 정의
 */

/*
  Scaffold : 페이지의 기본적인 레이아웃 요소 제공(페이지의 단위느낌).

  -appBar : 화면 상단 앱바를 추가
  -body : 화면의 주요 콘텐츠를 배치
  -floatingActionButton : 플로팅 액션(FAB) 버튼을 추가
  -bottomNavigationBar : 화면 하단, 탭바 또는 네비게이션 바 추가
  -drawer : 왼쪽에서 슬라이드로 나타내는 내비게이션 서랍 추가
  -endDrawer : 오른쪽에서 슬라이드로 나타내는 네비게이션 서랍 추가
  -bottomSheet : 화면 하단에 고정된 바텀 시트 추가
  -backgroundColor : Scaffold의 배경색 설정
  -persistentFooterButtons : 화면 하단에 고정된 버튼 그룹 추가
  -resizeToAvoidBottomInset : 키보드가 나타날 때 화면 크기를 자동으로 조정
  -extendBody : body가 화면 전체를 덮을지 여부를 설정 (buttonNativation을 가릴거냐)
  -extendBodyBehindAppBar : body가 AppBar를 가릴거냐
 */

/*
  builder 속성

  형태 : builder: (context, child) {}
  -context : 위젯트리의 현재 정보를 전달.
  -child : 상위 위젯의 return 을 정해준다. // 렌더링 성능 최적화 및 불필요한 빌드 방지
  1. context와 child는 프레임워크에서 자동으로 주입시켜주기 때문에 괜찮다.
 */