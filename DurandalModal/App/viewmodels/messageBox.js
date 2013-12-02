define(['plugins/dialog'], function(dialog) {

    var courses = ko.observableArray([]);

    var activate = function() {
        courses([]);
        courses.push({ name: 'Comm 101 - Public Speaking', description: 'Think back about some presentation you saw that left a positive impression. What was it that made an impact? The content? The slides? The presenter? In our field, the road to professional development is paved with great communication skills, and public speaking is an important part of that.  In this four-session workshop, we will learn how to deliver great presentations. We will learn and practice the development and delivery of a story that gets your message across effectively. We will also learn how to appropriately decorate your talk with supporting media. The best way to improve your public speaking skills is to practice, and this workshop will provide plenty of opportunity to practice in a "safe" setting.' });
        courses.push({ name: 'COMM 201 - How Communication Works', description: 'How do you make conversation with someone you have just met? When is communicating by email ill-advised? How do you say “no” without using that dreaded word? Regardless of age or occupation, conversation can be tricky. And like it or not, it’s one of the most important things you do on a daily basis. Successful conversations help you advance professionally and make, maintain, and deepen relationships. Moreover, research shows that talking, when done on a substantive level, is correlated with a feeling of happiness and general well-being.  Being a great conversationalist requires practice and effort. The good news is it’s a skill set anyone can acquire and refine. In just six lectures, How Conversation Works: 6 Lessons for Better Communication will teach you key strategies that can dramatically improve your ability to converse with anyone, from strangers to supervisors. This highly practical course focuses on the fundamental principles you need to know to become more conversationally aware and savvy at home, in the workplace, and beyond.  You’ll be amazed by how much you can learn by stepping back from conversations and examining how they operate. You’ll notice things you never picked up on before—like what kind of speaker you are, the strategies you typically rely on (often without realizing it), and the subtleties of the strategies others may use when speaking with you.' });
        courses.push({ name: 'FINC 101 - Financial Peace', description: 'This course is designed to give our employees (and their families) control of their money and information to allow them to make the best financial choices for themselves. This course uses common sense, biblical principles to go through a step-by-step plan to maximize your financial situation. Financial Wellness has a series of lessons that cover every question about money that always wanted to ask but didn’t know who to ask. This class is designed to give you the best possible information to make informed decisions and WHY these methods work. Millions of families all around the world have used these Baby Steps to save, get out of debt, build wealth, and give generously. ' });
    };
    
    var deleteCourse = function (data) {
        dialog.showMessage("Delete this course?", "Confirm Delete", ['Delete', 'Cancel'])
            .done(function(response) {
                if(response ==='Delete')
                    courses.remove(data);
            });
    };

    return {
        activate: activate,
        courses: courses,
        deleteCourse: deleteCourse
    };
});