
        
        //우선 각 함수의 id를 새로운 var로 재정의 해야 합니다.
        /* 1. ID와 Password의 조건(8자~20자 및 특수문자 x , 첫글자 숫자 x) 를 만족 시키기 위해
        ID를 가져와 새로 정의 해야 할 것입니다 
        2. Password와 Repeat Password가 같은 조건도 ID를 가져와 조건을 따져보면 됩니다.*/
        // 이러한 조건을 바탕으로, 우선 각각의 ID를 가져오도록 합니다.
        
        var Id=document.getElementById('username');
        var Password=document.getElementById('password');
        var RepeatPassword=document.getElementById('password2');
        /* 이후 해야할것은 다음의 두 가지 입니다.
        1. 위의 조건을 바탕으로 어떤 창이 뜰지 알려주는 함수 만들기
        2. Sign Up을 눌렀을 시 이 함수가 작동하도록 만들기.
        */
        var s_btn = document.getElementById("s_btn");
        s_btn.addEventListener('click',CfIdPass);
        s_btn.addEventListener('click',CfIdPass2);
        s_btn.addEventListener('click',CfId);
        s_btn.addEventListener('click',CfPass);
        s_btn.addEventListener('click',CfSign);
        s_btn.addEventListener('click',ClearCheckcode);
        /* 버튼 btn을 정의 해 주고, 각각의 조건을 서로 다른 이벤트로 추가 하였습니다.
        서로 다른 이벤트로 추가 한 이유는, 각각의 조건이 개별적으로 주어진 만큼,
        조건들에 대한 판별이 따로 이루어지는것이 맞다고 판단 하였기 때문입니다.*/

        var checkcode =0;
        /*각각의 조건들이 만족하면 checkcode를 1씩 추가하며, 4개의 조건을 모두 만족
        하여 checkcode가 4가 되면 Cfsign에서 회원가입이 완료 되었음을 처리하도록 합니다.*/
        
        function CfIdPass(){
            
            var Idlength=Id.value.length;
            var Passlength=Password.value.length;
            // ID와 Password의 길이 구분을 위한 변수입니다.

            if(Idlength>=8 && Idlength<=20 && Passlength>=8 && Passlength<=20)
            {
                checkcode ++;
            }
            else{
                return alert("아이디 및 비밀번호는 8자이상, 20자 이하야합니다.");
            }
        }
        //ID,PASSWORD의 글자수 제한에 대한 함수입니다.
        
       
        function CfIdPass2(){
            var SpecialWordSearch = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>\#$%&\'\"\\(\=]/gi;
            //특수문자를 판별할 정규표현식입니다.

            if(SpecialWordSearch.test(Id.value)==false && SpecialWordSearch.test(Password.value)==false)
            {
                checkcode ++; //checkcode는 조건을 만족 할 때마다 하나씩 늘어납니다.
            }
            else{
                return alert("아이디 및 비밀번호에는 특수문자가 올 수 없습니다.");
            }
        }
        //ID,PASSWORD의 특수문자 제한에 대한 함수입니다.
        // 정규식 함수.test("판별대상")함수는 판별 대상에 정규식을 만족하는 패턴이 있을 경우 true로 출력 해 줍니다. 

        function CfId(){
            var FirstWordSearch = /^[^0-9]/;
            // 첫번째 자리의 숫자 유무를 판별할 정규 표현식입니다.
            if(FirstWordSearch.test(Id.value)==true)
            {
                checkcode ++;
            }
            else{
                return alert("아이디의 첫 글자는 숫자가 아니여야 합니다.");
            }
        }

        function CfPass(){
            if(Password.value==RepeatPassword.value) // Password와 RepeatPassword의 value를 비교 해 줍시다.
            {
                checkcode ++;
            }
            else{
                return alert("Repeat Password와 Password가 다릅니다.");
            }
        }

        function CfSign(){
            if(checkcode==4)// 4가지 조건을 모두 만족 할 시에만 완료구절이 뜨도록 했습니다.
            {
                return alert("회원가입이 완료 되었습니다.");
            }
                
        }

        function ClearCheckcode(){
            checkcode=0;
        }
        /* checkcode는 4가지 조건만을 판별하는 것 이므로, 판별 이후에는 초기화가 되어야 다음 회원가입에 영향을 주지 않습니다.
        그렇기 때문에 마지막에 Clear를 시켜 주었습니다.*/

        /* 여담: 처음엔 Login() 함수로 크게 묶어 if를 한번에 처리했는데 보기에 상당히 이쁘지 않아서 각각의 함수로 분리시켰습니다.
        addEventLisnter는 다 좋은데 메세지 창 뜨는 속도가 느린거같습니다. 바꿀 수 있는 방법 없을까요*/
