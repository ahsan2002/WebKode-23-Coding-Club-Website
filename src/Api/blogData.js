export const blogData = [
    {
        id: '1',
        blogCategory: 'Technology',
        blogDate: 'April 27, 2023',
        authorName: 'Eric Elliott',
        authorDesignation: 'CEO and Writer',
        authorImg: '/images/person-1.jpeg',
        blogImg: '/images/blog-1.jpeg',
        blogSmallHeading: 'Learning Coding',
        blogHeading: 'Learning JavaScript from ChatGPT',
        blogAbout: 'Hello and welcome to the JavaScript course! I’m excited to help you learn and expand your JavaScript skills.',
        blogParaOne: 'GPT-4 was just released, and it represents significant enhancements over ChatGPT powered by GPT-3.5. Among the enhancements is an improved ability to maintain coherence over longer sessions and larger prompts.',
        blogParaTwo: 'I spent years building EricElliottJS.com to teach developers important concepts for JavaScript developers. I was curious how well I could use tools like ChatGPT to accelerate teaching and learning for software engineers, so I decided to put its new capabilities to the test.',
        blogParaThree: 'Comparing my performance to ChatGPT-3.5, I’d like to think that I have made progress in understanding context, generating relevant examples, and providing clearer explanations. Nevertheless, I made a mistake in one example, which highlights the importance of continuously refining my knowledge and understanding.',
        blogParaFour: 'Please feel free to provide feedback or suggestions, as it helps me improve my ability to assist users in learning and understanding various topics.',
    },
    {
        id: '2',
        blogCategory: 'UI/UX Designing',
        blogDate: 'April 26, 2023',
        authorName: 'Michal Malewicz',
        authorDesignation: 'Writer and Youtuber',
        authorImg: '/images/person-1.jpeg',
        blogImg: '/images/blog-2.png',
        blogSmallHeading: 'FIVE level',
        blogHeading: 'There are FIVE levels of UI skill.',
        blogAbout: 'I went through 500 junior UI designer portfolios in 2022 and almost 150 in 2023 already. Then I tried tracking their career — finding out who ended up employed and who didn’t.',
        blogParaOne: 'There is a stark difference between levels one and five. Most regular people, non-designers, can immediately tell you why the design on the right is better. Some people will argue the opposite, because there are outliers everywhere. That’s ok.',
        blogParaTwo: 'Once you take a closer look at each individual element and issue, you can start crafting a checklist of things to do to be closer to level 5.',
        blogParaThree: 'The issue though is that even when you KNOW the exact steps to take, it doesn’t mean you’re instantly going to be making level five designs. It takes a lot of practice, attention and even more practice on top of that.',
        blogParaFour: 'If you want to dive more in depth I have a free, 14 minute breakdown of all five levels on YouTube that you can watch right now and find out exactly which level you are on.',
    },
    {
        id: '3',
        blogCategory: 'Programming',
        blogDate: 'Jan 18, 2023',
        authorName: 'Pavel Pogosov',
        authorDesignation: 'Frontend Engineer',
        authorImg: '/images/person-1.jpeg',
        blogImg: '/images/blog-3.jpeg',
        blogSmallHeading: 'React useState Mistakes',
        blogHeading: '5 React useState Mistakes That Will Get You Fired',
        blogAbout: 'While useStateis a simple tool to use, many developers still make mistakes with it. During code reviews, I often see these mistakes made even by experienced people.',
        blogParaOne: 'useStateis only suitable to store components local states. This could include input value, toggle flags and etc. Global state belongs to the app as a whole, it doesn’t relate only to one specific component. If your data is used within multiple pages or widgets — consider putting it into a global state',
        blogParaTwo: 'This one can (and probably will) cause errors during code execution. You have probably already seen that type of error, it’s named “Can’t read properties of undefined”',
        blogParaThree: 'You mustn’t mutate React state ever in your life! React does a lot of smart and important stuff when the state changes, and it does that according to shallow comparison (comparison by reference, not values).',
        blogParaFour: 'All React hooks are composable, meaning they can be combined to encapsulate specific logic. This allows you to build custom hooks, and then use them throughout your application.',
    },
    {
        id: '4',
        blogCategory: 'Cascading Style Sheet CSS',
        blogDate: 'Nov 15, 2022',
        authorName: 'Flemming Dierlamm',
        authorDesignation: 'UI/UX Developer',
        authorImg: '/images/person-1.jpeg',
        blogImg: '/images/blog-4.jpeg',
        blogSmallHeading: 'CSS Tricks',
        blogHeading: '7 useful CSS Tricks',
        blogAbout: 'In this article I want to show you some simple CSS tricks which you can use in your next project. Let’s dive in to it ',
        blogParaOne: '1. Simple and easy way to create a cool text effect. This property can be used to assign an outline to the text. -webkit-text-stroke is the shorthand property for -webkit-text-stroke-width and -webkit-text-stroke-color:',
        blogParaTwo: '2. This trick can be used to truncate texts which goes over several lines. You also need to set overflow: hidden. 3. Especially for very high tables, a fixed thead can be very helpful for reading the table. ',
        blogParaThree: '4. This is the shorthand property for align-items and justify-items for grid and flexbox. 5. You need to highlight your <input> or <textarea> elements if they are not filled in yet? Then you can use :placeholder-shown',
        blogParaFour: '6. There may be a problem with the :hover property on mobile devices. The hover status is also executed per click. But if you use the :hover property in @media (hover: hover) and (pointer: fine) the hover is only shown on non touch devices. 7. To create simple text columns this property can be used. In this example here are two <p> tags with a column count of 2',
    },
]