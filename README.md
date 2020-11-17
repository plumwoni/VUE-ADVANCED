# 개발환경 구성
 1. node.js 설치
 2. vscode 설치
 3. windows 환경 설정 (path 등) : 기존 샘플 참조(SetPath.cmd)
 3. vue cli 설치
   - 터미널(ctrl+`)을 열어서 "npm i -g @vue/cli" 입력
 
# github 사용
 1. 깃허브에 레포지토리 생성
 2. vscode에서 ctrl+shift+p : git clone 선택
 3. 깃허브 레포지토리 url 주소 붙여넣기
 4. vscode 작업영역에 레포지토리 가 생성됨을 확인

# 프로젝트 생성 (/w cli)
 1. 프로젝트 루트 디렉토리로 이동 (vscode 작업영역에 생성된 레포지토리로 이동)
 2. cmd에서 "vue create [프로젝트명]" 타이핑
 3. pre-set 설정
 
 example>
   > vue create todolist
   ```
   Vue CLI v4.4.6
   ? Please pick a preset: Manually select features
   ? Check the features needed for your project: TS, Router, Vuex, Linter
   ? Use class-style component syntax? Yes
   ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? No
   ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
   ? Pick a linter / formatter config: Prettier
   ? Pick additional lint features: Lint on save
   ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
   ? Save this as a preset for future projects? (y/N)  Yes
   ```
   
 4. CLI가 프로젝트 생성함
 
# vue 라이브러리 설치
 1. vue router 설치 : vscode 터미널에서 "npm i vue-router --save" 입력
 2. vuex 설치 : npm i vuex
 3. axios 설치 : npm i axios --save
  --> save 옵션 : 설치되어 package.json의 "dependencies" 항목에 추가됨


# Tips
 - vue 파일 기본 형식 자동완성 (by veuter) : <vue -> tab키
 - 태그 입력 시, '<' 입력 없이 해당 내용을 입력하고, 예를 들면 <div 대신에 div 입력, 엔터키나 탭키를 누르면 자동완성됨
 - vue router 설치 후, mode를 변경시에는 VueRouter 객체 생성시에 "mode: 'history',"를 입력하여 mode 설정이 동적으로 가능함
 - 컴포넌트 등록은 파스칼방식으로 등록하면, vscode에서는 template에서 케팝형식으로 타입핑하면 태그가 자동으로 완성됨 (Vue 공식사이트에서는 템플릿에서 파스칼 방식으로 사용하는 걸 권장)
 - 스타일은 브라우저의 개발자 모드에서 직접 설정해보고 코드에 복붙하자
 - vscode 단축키
   * 내어쓰기 : 블럭 -> shift + tab
   * 들여쓰기 : 블럭 -> tab


# 개발환경
Node.js 공식 사이트 주소 : https://nodejs.org/ko/
Gist 주소 (깃헙 리포지토리 권한 요청 페이지) : https://gist.github.com/joshua1988/062448fd0251fa928d71276b3ba2f1eb
Vue.js 실전 강좌 비공개 리포지토리 주소 : https://github.com/joshua1988/vue-advanced
참고 : 깃헙 비공개 리포지토리는 브라우저에 깃헙 계정이 로그인 되어 있어야만 접근할 수 있습니다.
리포지토리 접근 권한을 얻기 위해 Gist 페이지에 댓글을 남겨주세요 😄

※ 참고 : 깃을 잘 모르시는 분들은 아래 튜토리얼이나 도서를 참고해보시길 추천드립니다 :)
- 팀 개발을 위한 Git, GitHub 시작하기 : http://www.yes24.com/Product/Goods/85382769?Acode=101
- 초심자를 위한 Github 협업 튜토리얼 : https://milooy.wordpress.com/2017/06/21/working-together-with-github-tutorial/

# VSCode 플러그인 리스트
- Atom Keymap : 아톰의 키 설정을 불러오는 플러그인
- Vetur : Vue.js 플러그인
- Night Owl : 코드 하이라이팅 플러그인
- Material Dark Syntax : 코드 하이라이팅 플러그인
- Google Material Icon Theme : 폴더 아이콘 테마
- ESLint : 자바스크립트 문법 검사 플러그인
- TSLint : 타입스크립트 문법 검사 플러그인
- Auto Close tag : HTML 태그 자동 닫기 플러그인
- Live Server : 정적 파일을 로컬 서버에 올리고 자동 갱신해주는 플러그인

# 스타일 가이드 링크
https://vuejs.org/v2/style-guide/


<!--
# Vue.js 완벽 가이드 - 실습과 리팩토링으로 배우는 실전 개념
Serial Code : 344820-262728-1685197

# 파이썬 머신러닝 완벽 가이드
Serial Code : 344820-324238-1781353

# Typescript with Vue 실전 프로젝트
Serial Code : 344820-324075-1638351
-->

# cli를 통해서 프로젝트 생성
vue init webpack-simple [프로젝트 폴더명(보통은)]

npm i -g @vue/cli
vue create [프로젝트이름]

npm i axios --save   (axios 라이브러리를 설치하고 저장하라)

CLI2.X vs CLI3.X
- 명령어
 - 2.x : vue init
 - 3.x : vue create
- 웹팩 설정 파일
  - 2.x : 노출 O
  - 3.x : 노출 X
- 프로젝트 구성
 - 2.x : 깃헙의 템플릿 다운로드
 - 3.x : 플러그인 기반으로 기능 추가
- ES6 이해도
 - 2.x : 필요 X
 - 3.x : 필요 O
 
# router
라우터 생성시 - mode: 'history' 로 하면 URI에 #(해쉬값)이 없어짐

# life-cycle hook function
 - beforeCreate, created // beforeMount, mounted // beforeUpdate, updated // beforeDestory, destoryed
 - https://vuejs.org/v2/guide/reactivity.html#ad  참조

# ES6
 - this 지시어 : js에서는 다른 언어와 달리 전역으로 사용되는 지시어
   이를 방지하는 개념이 ES6의 'use strict' 임
```
  예>
  const config = {
    baseUrl: 'https://abcd.com/V0/'
  };
  
  function fetchMemo() {
    return axios.get('https://abcd.com/V0/memo');  // 아래 두줄도 동일함
	return axios.get(config.baseUrl +'memo');
	return axios.get(`$(config.baseUrl)memo`); // 백팃(`) 사용. ES6의 템플릿 스트링을 사용한 구문
  }
```

 - axios.get() 등의 리턴 값은 onprimese 객체이며 해당 객체는 파이프로 then, catch 함수를 붙여 사용할 수 있음
 - "=> 함수"
 ```
   예>
   var vm = this;
   axios.get(url)
     .then( function(res) {
	   vm.dataArrary = res.data;
	 })
	 .catch( function (error) {
	   console.error(error);
	 });
   // 하기 내용 동일
   axios.get(url)
     .then( res => this.dataArray = res.data ) // => 함수를 사용하면 호출 전의 this를 가져올 수 있음 (바로 this 사용이 가능하다는 말)
	 .catch( error => console.error(error) );
 ```
 
# Promise 객체
 - resolve 와 reject 를 인자로 받는다.
 - 자바스크립트 Promise 쉽게 이해하기 : https://joshua1988.github.io/web-development/javascript/promise-for-beginners/
 - Promise MDN 주소 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise



# vuex
 - Action, Mutations, State
 - state(상태)라 함은 여러 컴포넌트 간에 공유되는 데이터 속성
   예> NewsView에서 사용하는 data()에서 리턴되는 users
 - Vue 컴퍼넌트에서 Actions를 dispatch함 -> Action 에서는 비동기 호출만 가능 -> Mutations에 응답데이터 담음 -> State의 상태값을 mutate함 -> Vue 컴포넌트에 렌더링 (순환)
 
# Reactivity in Depth
Vue 인스턴스에 JavaScript 객체를 data 옵션으로 전달하면 Vue는 모든 속성에 Object.defineProperty를 사용하여 getter/setters로 변환합니다. 이는 Vue가 ES5를 사용할 수 없는 IE8 이하를 지원하지 않는 이유입니다.

getter / setter 는 사용자에게는 보이지 않으나 속성에 액세스 하거나 수정할 때 Vue가 종속성 추적 및 변경 알림을 수행할 수 있습니다. 
한가지 주의 사항은 변환된 데이터 객체가 기록될 때 브라우저가 getter / setter 형식을 다르게 처리하므로 친숙한 인터페이스를 사용하기 위해 vue-devtools를 설치하는 것이 좋습니다.

모든 컴포넌트 인스턴스에는 해당 watcher 인스턴스가 있으며, 이 인스턴스는 컴포넌트가 종속적으로 렌더링되는 동안 “수정”된 모든 속성을 기록합니다. 
나중에 종속적인 setter가 트리거 되면 watcher에 알리고 컴포넌트가 다시 렌더링 됩니다.

<img src="http://vuejs.org/images/data.png" alt="Reactivity Cycle">

# 하이 오더 컴포넌트
 단점 : 컴포넌트의 깊이가 깊어지기 때문에 컴포넌트 간 통신이 어려울 수 있음
 
# Mixins(믹스인)
 - 믹스인은 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법입니다. 믹스인에 정의할 수 있는 재사용 로직은 data, methods, created 등과 같은 컴포넌트 옵션입니다.

# 데이터 호출 시점
 1. 컴포넌트 라이프 사이클 훅 사용시
 2. 라우터 네비게이션 가드 사용시
   - 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)
   
# 비동기 처리 패턴
 1. 콜백 함수 이용
  $.get('domain.com/id', function(id) {
    if(id === 'jain') {
	  $.get('domain.com/products', function(products) {
	    console.log(products);
	  });
	}
  });

 2. Promise 객체생성하여 반환하여 체이닝 형식으로 이용
  function getId() {
    return new Promise( function(resolve, reject) {
	  $.get('domain.com/id', function(id) {
	    resolve(id);
	  });
	});
  }
  getId()
    .then (function(id) {
	  if (id === 'jain') {
	    $.get('domain.com/products', function(products) {
		  console.log(products);
		});
	  }
	})
	.then (function() {
	})
	.catch();
	
  ==> 리팩토링 (코드 가독성 향상)
  function getProduct() {
    //...
  }
  function logProduct() {
    // ...
  }
  getId()
    .then(getProduct)
	.then(logProduct)
	.chatch();
	
 3. async await 방식 이용 (아래 코드는 컨셉만 표현한 코드임)
  var id = $.get('id');
  if (id === 'jain') {
     var products = $.get('products');
  }
  console.log(products)
  
  - 함수 선언문 앞에 async 를 붙이고
    함수 안에 Promise 객체를 리턴하는 함수에 await를 붙일 수 있음
	
# vue.js에서 외부라이브러리 모듈화 방법
 1. 외부 라이브러리 모듈화
   - 이유 : Vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 함
   - 종류 : 챠트, 데이트 피커, 테이블, 스피너 등등
   
 2. chart.js 모듈화
  1) 새로운 프로젝트 생성 (프로젝트 루트로 이동 -> vue create chart-lib -> default로 설치)
  2) 설치 확인 (cd chart-lib -> npm run serve -> 브라우저 확인) 및 파일들 초기화 (@/components/Hello~ 파일 삭제, @/App.vue 초기화)
  3) chart.js 설치 - 공식문서 참조 (npm install chart.js --save)
  4) 공식문서 usage 페이지에서 다음 부분 복붙함 (App.vue의 template에..)
     <canvas id="myChart" width="400" height="400"></canvas>
  5) 해당 소스에서 script 부분을 mounted() 에 복붙하고 3)에서 설치된 chart.js 를 import 함
  6) 서버 실행하여 차트 로딩되는 지 확인
 
 3. 차트를 컴포넌트화
  1) @/components/BarChart.vue 생성
  2) 2.chart.js 모듈화의 5)에서 붙여넣었던 mounted() 라이프사이클 훅 부분을 그대로 복붙
  3) @/components/BarChart.vue , @/App.vue 소스 참조
 
 4. 컴포넌트의 플러그인화
  1) @/plugins/ChartPlugin.js @/main.js 소스 참조
  
 6. 컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합
  1) 컴포넌트 구성시 되도록 하위 컴포넌트는 단순 기능을 하는 컴포넌트여야 함
  2) 상위 컴포넌트에서 데이터를 얻고 가공한 후 하위 컴포넌트로 데이터를 넘겨주는 방식의 구조가 좋다
  3) 컴포넌트간 통신은 props, emit 등으로 데이터 통신을 할 수 있다
 
# javascript reference 기능
 - 장점 : 컴포넌트 기반으로 생성한다고 할 때, 컴포넌트 내에서만 사용할 수 있기 때문에 다른 컴포넌트의 DOM 객체와 충돌발생 확률이 적다
  ```
    <div ref="app" id="app">hello</div>
	
	<script>
	  var divElement = document.getElementById('app');	// DOM 메소드사용
	  var divElement = document.querySelector('#app');	// DOM 메소드사용
	  var divElement = $('#app');						// jQuery 사용
	  var divElement = this.$refs.app;					// reference 사용
	</script>
  ```

# 컴포넌트 디자인 패턴
 1. Common - 기본적인 컴포넌트 등록과 컴포넌트 통신
 2. Slot - 마크업 확장이 가능한 컴포넌트
 3. Controlled - 결합력이 높은 컴포넌트
 4. Renderless - 데이터 처리 컴포넌트
 ==> VUE-ADVANCED/design 밑에 common, controlled, rederless, slots 프로젝트 생성