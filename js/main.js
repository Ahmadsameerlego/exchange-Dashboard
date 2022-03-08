// toggle icon for Sidebar


function toggleScreen(){
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.content').classList.toggle('active');
}



// image-preview


        // /// Upload Image
        $(document).ready(function() {
            // REMOVE IMAGE
            $('.images-upload-block').on('click', '.close',function (){
                $(this).parents('.box-up').remove();
                // $(this).parents('.upload-img').remove();
            });
            // ADD IMAGE
            $('.image-uploader').change(function (event){
                $(this).parents('.images-upload-block .upload-img').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close">&times;</button></div>');
            });
            $(".click_event").click(function (b){
                b.preventDefault();
                $(this).parents('.parent-img').find(".drop-box").append('<div class="text-center m-2 box-up">' + '<div class="images-upload-block">' + '<label class="upload-img">' + '<span><i class="fa fa-image" aria-hidden="true"></i></span>' + '<input type="file"  id="imageArr" name="imageArr" class="image-uploader">' + '</label>' + '</div>' + '</div>');
    
                // ADD IMAGE
                $('.image-uploader').change(function (event){
                    $(this).parents('.images-upload-block .upload-img').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close">&times;</button></div>');
                });
                // REMOVE IMAGE
                $('.images-upload-block').on('click', '.close',function (){
                    $(this).parents('.box-up').remove();
                    // $(this).parents('.upload-img').remove();
                    // $(this).parents('.uploaded-block').remove();
                    // $(this).parents('.images-upload-block').remove();
                });
            });
        });



// remove item from colleges page

// document.querySelectorAll('.fa-trash-alt').forEach((e)=>{
//     e.addEventListener('click',()=>{
//         console.log('vfvf')
//     })
// })

// dropdown

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
    }
    }
}
}

// delete order in student buys page

document.querySelector('.deleteOreder').addEventListener('click',()=>{
    document.querySelector('.studentInfo').classList.add('active');
})


