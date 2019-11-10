document.addEventListener("DOMContentLoaded",function(){
    let speakerImages = document.getElementsByClassName('speaker-content');
    let websiteLink = window.location.href;
    let speakerLink = websiteLink.substring(websiteLink.lastIndexOf('/')+1, websiteLink.length - 5);
    let imageURL = 'https://rise2019.org/img/Speakers/' + speakerLink +'.png';
    fetch(imageURL).then((response)=>{ 
            if(response.status == 200){
                let imageSrc = imageURL;
                let image_template = `<div data-embed-button="media_browser" data-entity-embed-display="view_mode:media.embedded" data-entity-type="media" data-entity-uuid="7e65e94f-48b5-40ca-a0bc-2b805b4aa1f3" data-langcode="en" class="embedded-entity align-right">
                <div>
                    <div class="field field--name-image field--type-image field--label-hidden field--item"> <img src="${imageSrc}" width="255" height="383" alt="havidan rodriguez photo" typeof="foaf:Image" class="img-responsive" style="border-radius: 4px; margin-top: 5px; margin-left: 20px"></div>
                </div>
                </div>`;
                speakerImages[0].insertAdjacentHTML('afterbegin', image_template);
            }
        });
});