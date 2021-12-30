 - 타입스크립트 공부기 ....
Typescript로 함수형 컴포넌트 생성
함수형 컴포넌트를 생성 할 때에는 React.FC (Functional Component의 약자) 라는 타입을 사용 한다 .

```js
import React, {useState} from 'recat';

const App: React.FC = () => {
    // 변수에 타입지정하기

    let hungry: string = "hangry"
    // 변수명: 타입명의 형태로 변수의 타입을 지정해 줄 수 있다 .

    //배열과 객체의 타입지정 
    let hamburgerKing : string[] = ["Mc.donald", "BigMac"]
    let pizzaStore: {store: string} = {store: "pizzaHut"}

   //Typescript 에서 useState 타입 부여하기
   consst [name, setName]: [string | null , any] = useState(null)
                            // name에는 문자열 또는 null값을 부여하고 , setName 에는 아무 타입이나 들어올 수있게 했습니다 .
                // | 연산자는 또는 이라는 의미

    let nestedProp = obj.first?.second;
    //optional chaing 을 사용하면 지정한 타입의 값이 들어오지 않아도 오류를 내지 않고 undefined만 반환한다 
    //optional chaing을 사용하지  않으면 지정한 타입이 들어오지 않으면 오류가 발생한다 .


    const handleInput: ReactChangeHandler<HTMLInputElement> = (e) => {
        setName(e.target.value)
    }

    const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {

    }
    // 이런식으로 이벤트 함수들 또한 타입을 부여 해줄 수 있습니다 .

   // 함수가 반환하는 값의 타입 지정

   
    const foo = (num1: number, num2: number) => {
    	return num1 + num2; // number
    };
    // num1 넘버타입 num2 넘버타입

    //혹은 함수가 반환하는 값의 타입을 직접 지정
    
    const foo = (num1: number, num2: number): string => {
    	return num1 + num2; // 에러 발생!
    };
    // 매개변수가 끝나는 지점에서 타입을 정해주면 된다 . 이 경우에는 전달 받는 두 매개변수가 num 타입인데 string타입으로 반환하려고 하니 애러가 발생한다 .


    //보이드 함수 

    
    const greetMaker = (phrase: string): void => {
	console.log(phrase);
    };
    //보이드 함수는 아무것도 반환하지 않는 함수 입니다 .
    // greetMaker 함수는 아무것도 반환하지 않습니다. 이렇게 아무것도 반환하지 않는 함수에 void타입을 지정하게 됩니다. 그리고 void가 지정된 함수는 undefined를 반환하게 됩니다. 앞서 함수에 타입을 지정할 때 처럼 타입스크립트 스스로 아무것도 반환하지 않는 함수에 void타입을 지정해줍니다. 그러니 void 타입을 별도로 지정해주지 않으셔도 됩니다.

    
    const greetMaker = (phrase: string): undefined => {
    	console.log(phrase);
    	return;
    };
    

    // 타입을 undefined로 지정해주기 위해 return 까지 써주어야 하고 이렇게 해도 되지만 void로 지정해준 방법이 더 깔끔하다 . 
}

