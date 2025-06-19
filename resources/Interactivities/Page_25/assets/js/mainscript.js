$(document).ready(function () {
    const correctAnswers = [
        ['true'], // Answer for the first question
        ['true'], // Answer for the second question
        ['true'], // Answer for the third question
        ['false'] // Answer for the fourth question
    ];

    // Handle the option selection
    $('.q_list li .option').on('click', function () {
        $('#btn-submit').attr('disabled', false);
        $(this).toggleClass('selected'); // Toggle the 'selected' class for this option
        $(this).siblings().removeClass('selected'); // Remove 'selected' class from other options
    });

    // Handle submit button click
    $('#btn-submit').on('click', function () {
        $('#btn-submit').attr('disabled', true);
        let allCorrect = true;

        $('.q_list li').each(function (index) {
            const selectedOption = $(this).find('.selected');

            // Check if the selected option matches the correct answer
            const isSelectedCorrect = correctAnswers[index][0] === 'true' && selectedOption.length > 0; // Answer is correct when option has 'selected' class
            const isSelectedIncorrect = correctAnswers[index][0] === 'false' && selectedOption.length === 0; // Answer is incorrect when option doesn't have 'selected' class

            // If the answer is incorrect, set allCorrect to false
            if (!(isSelectedCorrect || isSelectedIncorrect)) {
                allCorrect = false;
            }
        });

        // Display the appropriate feedback
        if (allCorrect) {
            $('#welldone').css({ display: 'flex', opacity: 1 });
            $('#tryagain').css({ display: 'none', opacity: 0 });
            var audio = new Audio('./assets/audio/Feedback/Correct1.mp3');
            audio.play();
        } else {
            $('#welldone').css({ display: 'none', opacity: 0 });
            $('#tryagain').css({ display: 'flex', opacity: 1 });
            var audio = new Audio('./assets/audio/Feedback/Wrong1.mp3');
            audio.play();
            $('#btn-answer').attr('disabled', false);
        }
    });

    // Handle the reset button click
    $('#btn-reset').on('click', function () {
        $('.q_list li .option').removeClass('selected'); // Remove selected class from all options
        $('#welldone').css({ display: 'none', opacity: 0 }); // Hide 'Well done' message
        $('#tryagain').css({ display: 'none', opacity: 0 }); // Hide 'Try again' message
    });

    // Function to show answers
    function showAnswers() {
        $('.q_list li .option').removeClass('selected');
        $('.q_list li').each(function (index) {
            const option = $(this).find('.option');

            // If the answer is correct, add the 'selected' class
            if (correctAnswers[index][0] === 'true') {
                option.addClass('selected');
            } 
            // If the answer is incorrect, remove the 'selected' class
            else {
                option.removeClass('selected');
            }
        });
    }

    // Handle the show answers button click
    $('#btn-answer').on('click', function () {
        $('#btn-answer').attr('disabled', true);
        showAnswers();
    });

});
