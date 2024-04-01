// 1.默认自动轮播状态：
        // 小圆点跟随图片变化而变化
        // 2.触发状态：
        // 当鼠标悬浮小圆点，小圆点发生样式改变且不再进行轮播，当点击的时候，对应小圆点的图片发生改变
        // 鼠标悬于左右按键的时候图片不再进行轮播，点击时根据当前图片的位置向前或者向后

        // 1 添加计时器
        // 2 定义轮播匹配的变量下标
        // 3 进行触发后计时器的停止和开启
        // 4 点击对应按钮要拿到对应的下标并且改变图片

        // 步骤
        // 1.进行元素的获取
        var imgs= document.querySelectorAll(".imgshow a")
        var points= document.querySelectorAll(".points a")
        var btns= document.querySelectorAll(".btns")
        // 定义当前显示的下标
        var nowIndex = 0
        // 计时器对象
        var timer = null
        // 2.设计方法让所有的图片隐藏
        function hiddenImages() {
            for(var i=0; i < imgs.length; i++) {
                imgs[i].style.display="none"
            }
        }
        // 3 设计方法让所有的小圆点处于隐藏的样式
        function hiddenPoints() {
            for (var i = 0; i < points.length; i++) {
                points[i].className="hidden"
            }
        }
        // 4 设计方法让所有的小圆点显示和图片的显示都处于隐藏状态并且跟进当前设置的下标来进行显示
        function changeAll() {
            hiddenImages()
            hiddenPoints()
            imgs[nowIndex].style.display="block"
            points[nowIndex].className="show"
        }
        // 5 设计轮播方法
        function bannerPlay() {
            timer = setInterval(function () {
                changeAll()
                nowIndex++
                // 判断如果下标超出就回到第一张
                if(nowIndex >= imgs.length) {
                    nowIndex = 0
                }
            }, 3000)
        }
        // 调用
        bannerPlay()
        // 6 进行小圆点的触发编写
        for(var i = 0; i < points.length; i++) {
            // 悬浮时计时器停止
            points[i].onmouseover = function() {
                clearInterval(timer)
            }
            points[i].onmouseout = function() {
                bannerPlay()
            }
            imgs[i].onmouseover = function() {
                clearInterval(timer)
            }
            imgs[i].onmouseout = function() {
                bannerPlay()
            }
            // 小圆点添加下标
            points[i].index = i
            // 点击
            points[i].onclick= function() {
                nowIndex = this.index
                // 更改图片
                changeAll()
            }
        }
        // 触发左右键的效果
        for (var i = 0; i < btns.length; i++) {
            btns[i].onmouseover = function() {
                clearInterval(timer)
            }
            btns.onmouseout = function() {
                bannerPlay()
            }
        }
        // 点击左键
        btns[0].onclick=function() {
            nowIndex--
            if(nowIndex < 0) {
                nowIndex = points.length - 1
            }
            changeAll()
        }
        // 点击右键
        btns[1].onclick=function() {
            nowIndex++
            if(nowIndex > points.length-1) {
                nowIndex = 0
            }
            changeAll()
        }

        // 获取自定义弹窗元素和关闭按钮
    const customModal = document.getElementById('customModal');
    const closeModalButton = document.getElementById('closeModal');
    const customModal1 = document.getElementById('customModal1');
    const closeModalButton1 = document.getElementById('closeModal1');
    const customModal2 = document.getElementById('customModal2');
    const closeModalButton2 = document.getElementById('closeModal2');

    // 初始化时隐藏自定义弹窗
    customModal.style.display = 'none';
    customModal1.style.display = 'none';
    customModal2.style.display = 'none';

    // 显示自定义弹窗的函数
    function showCustomModal() {
        customModal.style.display = 'block'; // 显示弹窗
    }   
    function showCustomModal1() {
        customModal1.style.display = 'block'; // 显示弹窗
    }   
    function showCustomModal2() {
        customModal2.style.display = 'block'; // 显示弹窗
    }   

    // 关闭自定义弹窗的函数
    function closeCustomModal() {
        customModal.style.display = 'none'; // 隐藏弹窗
    }
    function closeCustomModal1() {
        customModal1.style.display = 'none'; // 隐藏弹窗
    }
    function closeCustomModal2() {
        customModal2.style.display = 'none'; // 隐藏弹窗
    }

    // 为关闭按钮添加事件监听器
    closeModalButton.addEventListener('click', closeCustomModal);
    closeModalButton1.addEventListener('click', closeCustomModal1);
    closeModalButton2.addEventListener('click', closeCustomModal2);

    // 为可点击文本添加事件监听器
    document.getElementById('clickableText').addEventListener('click', showCustomModal);
    document.getElementById('clickableText1').addEventListener('click', showCustomModal1);
    document.getElementById('clickableText2').addEventListener('click', showCustomModal2);

    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.innerHTML = '这是自定义弹窗内容'

    const closeButton = document.createElement('button')
    closeButton.innerHTML = '关闭'
    closeButton.classList.add('close-button')
    closeButton.addEventListener('click',function() {
        modal.remove()
    })
    modal.appendChild(closeButton)
    document.body.appendChild(modal)