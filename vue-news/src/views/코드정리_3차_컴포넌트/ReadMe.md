# 샘플로 NewsViews.vue를 @/components/ListItme.vue 로 변환할 예정
# 공통적인 부분을 컴포넌트로 다 옮기고 NewsView.vue에는 해당 컴포넌트를 import만 한다.
# 데이터를 api로 가져오는 부분을 분기처리 해야하는 데, 해당 분기 조건은 routes 정보를 이용한다.
# 제일 간단한 방법은 routes 의 path 정보로 분기할 수 있지만 @/routes/index.js의 routes에 name 속성을 추가하여 분기 조건으로 사용한다.