$(document).ready(function() {
  
    const completedRooms = {};

    const personItem = { name: 'Person', imgSrc: 'https://www.pngmart.com/files/23/Man-Cartoon-PNG.png' };

    const imgElement = $('<img>', {
        src: personItem.imgSrc,
        alt: personItem.name,
        class: 'draggable',
        draggable: true
    });

    imgElement.on('dragstart', function(e) {
        e.originalEvent.dataTransfer.setData('text/plain', personItem.name); 
    });

    $('#roomLayout').append(imgElement);

    $('.room').on('dragover', function(e) {
        e.preventDefault();  
        $(this).css('background-color', '#d3ffd3');  
    });
  
    $('.room').on('dragleave', function() {
        $(this).css('background-color', '#e0e0e0');  
    });

    $('.room').on('drop', function(e) {
        e.preventDefault();
        $(this).css('background-color', '#d3ffd3');

        const roomId = $(this).attr('id'); 
        const roomName = $(this).data('room'); 
        
        console.log(`${personItem.name} was dropped into ${roomName}`);
        
        $(this).find('.choresList').text(`${roomName} chores done!`);
        
        completedRooms[roomId] = true;

        if (Object.keys(completedRooms).length === 4) {
            $('#congratulations').show();  
        }

        $(this).find('.draggable').remove();
    });
});
