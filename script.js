var about_text =
"Hello my name is Arlen Molina. I was born October 30th, 2001. \
I was born in Cuba, and in 2010 I moved to Houston, Texas, and later on in 2014, I moved to Galveston, Texas, \
where I currently live. Ever since I was little I always had an interest in computers, and around the time I was in 8th grade \
I decided to learn how to program. Since then I've learned multiple programming languages, such as Java, C#, C++, Rust, Nim, \
HTML, CSS and Javascript. While I am most comfortable in the languages mentioned above, I am not afraid to try new languages as I \
find them exciting, especially novel languages with new advanced but cost effective features. My original goal with programming \
was to make games and as such most of my experience is with system level languages such as C++ and Rust, however I also love web development \
and I'm looking to expand my skillset. I am currently attending Colorado Technical University Online in order to receive a Bachelor's in \
Computer Science, and I expect to graduate in August, 2023. And while I still haven't completed my degree I do believe I am ready \
to start my career because I have been learning a lot on my own while I was in highschool and even more now that I am in college. \
";

var education_text =
"I earned my highschool degree at Ball Highschool in Galveston, Texas. I started in 2015 and graduated in 2019. \
After graduating I went to Galveston College for a year, but transferred to Colorado Technical University Online in 2020 after COVID. \
I expect to graduate in 2023 with a Bachelor's of Science in Computer Science. \
";

var exp_text =
"My work history starts when I first turned 16. I worked at a park in Galveston called Pleasure Pier selling admission tickets and running the parking lot. \
I worked there the summer of 2018 and left the job when school started again to focus in school. Later in 2019 I began to work at Domino's pizza as a delivery \
driver, however after only a few months I was in my first and only traffic accident and decided not to work there anymore. After COVID I was out of work for about \
6 months. Finally later during the summer of 2020 I started working at Academy Sports and Outdoors as a cashier. After about 6 months I realized that I really did \
not enjoy the work as a cashier, and I got an offer from Papa John's to work delivery so I worked there from the beginning on 2021 until about May when \
I started at Metro by TMobile, where I currently work in order to gain some sales experience. \
";

var skills_text =
"Over my time working various part-time jobs I've learned a lot of skills such as, cash handling, customer service, delivery driving, and sales. \
I was also born in Cuba and speak a lot of Spanish at home, and I'm fluent in both English and Spanish. \
I've taught myself several programming languages such as, Java, C++, C#, HTML, CSS, and Javascript, as well as I've had several Web Development, \
and Computer Science related classes both in Highschool and College. \
";

var proj_text =
"I've also made some projects over time you can check them out on \
"

var about_down = false;
var education_down = false;
var exp_down = false;
var skills_down = false;
var proj_down = false;

function load()
{

}

function about_click()
{
    var about = document.getElementById("about");
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(about_text));
    p.id = "abouttext";

    if (about_down)
    {
        about.removeChild(document.getElementById("abouttext"));
        about_down = false;
        return;
    }

    about.appendChild(p);
    about_down = true;
}

function education_click()
{
    var education = document.getElementById("education");
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(education_text));
    p.id = "educationtext";

    if (education_down)
    {
        education.removeChild(document.getElementById("educationtext"));
        education_down = false;
        return;
    }

    education.appendChild(p);
    education_down = true;
}

function exp_click()
{
    var experience = document.getElementById("experience");
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(exp_text));
    p.id = "exptext";

    if (exp_down)
    {
        experience.removeChild(document.getElementById("exptext"));
        exp_down = false;
        return;
    }

    experience.appendChild(p);
    exp_down = true;
}

function skills_click()
{
    var skills = document.getElementById("skills");
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(skills_text));
    p.id = "skillstext";

    if (skills_down)
    {
        skills.removeChild(document.getElementById("skillstext"));
        skills_down = false;
        return;
    }

    skills.appendChild(p);
    skills_down = true;
}

function proj_click()
{
    var projects = document.getElementById("projects");
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(proj_text));
    p.id = "projtext";
    var a = document.createElement("a");
    a.href = "https://github.com/seiyadragon";
    a.appendChild(document.createTextNode("Github!"));
    p.appendChild(a);

    if (proj_down)
    {
        projects.removeChild(document.getElementById("projtext"));
        proj_down = false;
        return;
    }

    projects.appendChild(p);
    proj_down = true;
}