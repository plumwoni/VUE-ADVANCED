# 사용자 정의 이벤트를 사용하여 폼 입력 컴포넌트 만들기
 사용자 정의 이벤트는 v-model 에서 작동하는 사용자 정의 입력을 만드는데에도 사용할 수 있습니다. 기억하세요.
 ```
    <input v-model="something">
 ```
위 문장은 아래와 같습니다.
```
   <input
     v-bind:value="something"
     v-on:input="something = $event.target.value">
```

컴포넌트와 함께 사용하면 다음과 같이 간단해집니다.
```
   <custom-input
     v-bind:value="something"
     @input="value => { something = value }">
   </custom-input>
```

따라서 v-model을 사용하는 컴포넌트는 (2.2.0버전 이상에서 설정을 조작할 수 있습니다.)
 * value prop를 가집니다.
 * 새로운 값으로 input 이벤트를 내보냅니다.

매우 간단한 통화 입력을 사용하는 모습을 보겠습니다.
```
<currency-input v-model="price"></currency-input>
```

```
    Vue.component('currency-input', {
      template: '\
        <span>\
          $\
          <input\
            ref="input"\
            v-bind:value="value"\
            v-on:input="updateValue($event.target.value)">\
        </span>\
      ',
      props: ['value'],
      methods: {
        // 값을 직접 업데이트하는 대신 이 메소드를 사용하여
        // 입력 값에 대한 서식을 지정하고 배치 할 수 있습니다
        updateValue: function (value) {
          var formattedValue = value
            // 공백을 제거합니다.
            .trim()
            // 소수 자릿수 2자리로 줄입니다
            .slice(
              0,
              value.indexOf('.') === -1
                ? value.length
                : value.indexOf('.') + 3
            )
          // 값이 아직 정규화 되지 않은 경우
          // 이를 수동으로 재정의하여 조건을 충족시킵니다.
          if (formattedValue !== value) {
            this.$refs.input.value = formattedValue
          }
          // 입력 이벤트를 통해 숫자 값을 내보냅니다.
          this.$emit('input', Number(formattedValue))
        }
      }
    })
```