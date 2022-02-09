// message=
//     '<font size="5" color="#2B65EC">Good morning and Heluuu bé Phương ^^</font>' + '<br>' + 
//     '<font size="5" color="#2B65EC">Đầu tiên thì chúc em hôm nay thi tốt nha, cố lên ^^</font>'  + '<br>' + 
//     '<font size="5" color="#2B65EC">Hôm nay là ngày 14/2 - là ngày lễ tình nhân. A biết, a biết =)) Rằng anh chưa phải là người yêu của em</font>'  + '<br>' + 
//     '<font size="5" color="#2B65EC">Cơ mà, dù chưa phải là người yêu nhưng anh nhân ngày này đẻ gửi đến em món quà nho nhỏ là cái tấm thiệp online này</font>'  + '<br>' 
//     '<font size="5" color="#2B65EC">Chúc em 1 ngày mới vui vẻ và hôm nay thi thật tốt nha</font>' + '<br>' +
//     '<font size="5" color="#2B65EC">Và cũng qua tấm thiệp này, anh cũng muốn nói rằng anh thực sự thực sự thích em một cách nghiêm túc</font>' + '<br>' +
//     '<font size="5" color="#2B65EC">Và anh rất muốn được bày tỏ tình cảm của mình nhưng vì mình chưa phải ng yêu nên anh không thể =))</font>' + '<br>' + 
//     '<font size="5" color="#2B65EC">Bởi vì rát có thể anh đang chăm vợ người khác thì sao ^^</font>' + '<br>' +
//     '<font size="5" color="#2B65EC">Thui cũng dài rồi, chúc em ngày mới vui như tính cách của em nha và thi thật tốt bài thi nha ^^ =))</font>' + '<br>' +
//     '<font size="5" color="#2B65EC">Bye bye, and I like you so much <3 <3</font>' + '<br>' 
//     line = 0
//     cursor = '_'
//     function teclear() {
//       if (line == message.length) cursor = ''
//       ttecleado.innerHTML = message.substring(0, line) + cursor
//       if (line++ < message.length) setTimeout("teclear()", 60)
//     }


$(document).ready(function() {
  document.getElementsByClassName('open')[0].addEventListener('click', function () {
    document.getElementsByClassName('card-packaging')[0].classList.add('is-open')
    var song = document.createElement("audio");
    song.setAttribute("src", "./nhac1.mp3");
    $("body").append(song);
    song.play();
    $("#dong1").fadeIn(5000)
    setTimeout(showLine2,5000)
    setTimeout(showLine3,12000)
    setTimeout(showLine4,16000)
    document.getElementsByClassName('close')[0].addEventListener('click', function () {
      song.pause();
      document.getElementsByClassName('card-packaging')[0].classList.remove('is-open')
    })
  })
})
function showLine2() {
  $("#dong2").fadeIn(4000)
}
function showLine3() {
  $("#dong3").fadeIn(4000)
}
function showLine4() {
  $("#dong4").fadeIn(4000)
}
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementsByClassName('open')[0].addEventListener('click', function () {
//       $("dong1").fadeIn(3000)
//       $("dong2").fadeIn(6000)
//       $("dong3").fadeIn(9000)
//       $("dong4").fadeIn(12000)
//       document.getElementsByClassName('card-packaging')[0].classList.add('is-open')
//         // setTimeout(showLine1, 2000)
//         // setTimeout(showLine2, 4000)
//         // setTimeout(showLine3, 6000)
//         // setTimeout(showLine4, 8000)
//     })
  
//     document.getElementsByClassName('close')[0].addEventListener('click', function () {
//       document.getElementsByClassName('card-packaging')[0].classList.remove('is-open')
//     })
//   });
// function showLine1() {
//     document.getElementsByClassName('line1')[0].style.visibility = 'visible'
// }
// function showLine2() {
//     document.getElementsByClassName('line2')[0].style.visibility = 'visible'
// }
// function showLine3() {
//     document.getElementsByClassName('line3')[0].style.visibility = 'visible'
// }
// function showLine4() {
//     document.getElementsByClassName('line4')[0].style.visibility = 'visible'
// }