import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GitHubCalendar from 'react-github-calendar'; // https://grubersjoe.github.io/react-github-calendar/
import '../css/GithubInfoBox.css';

function GithubInfoBox(/*props*/) {

    const [repositoryItems, setRepositoryItems] = useState();

    const repositoryBlacklist = [507337675]

    useEffect(() => {
        getRecentRepositories();
    }, []);

    const getRecentRepositories = async () => {
        const response = await fetch(
            "https://api.github.com/users/Koen-H/repos?per_page=4&sort=pushed"
        ).then((response) => response.json());
        setRepositoryItems(response.map((repository) => {
            if (repositoryBlacklist.includes(repository.id)) return;
            else return <li key={repository.id}>
                <RepositoryItem repository={repository} />
            </li>
        },


        ))
    };


    const selectedArea = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 7;

        return contributions.filter(day => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };
    // const fetchi = fetch("https://api.github.com/users/Koen-H/repos")
    //     .then((response) => response.json())
    //     .then((data) =>setRecentRepositories(data));
    //     console.log(fetchi);
    // console.log(recentRepositories);

    return (
        <section id="github-infobox">
            <h1>Take a look at my code at GitHub!</h1>

            <div className='row'>
                <div className="col-lg-6">
                    <p>I’m very familair with github and use it a lot while working on my projects. A lot of them are open source and available to look through!</p>

                    <div className='github-container'>

                        <div className='github-calendar"'>
                            <GitHubCalendar username="Koen-H" transformData={selectedArea} hideTotalCount hideColorLegend />
                        </div>
                        <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=Koen-H&layout=compact&count_private=true' />
                    </div>

                </div>
                <div className="col-lg-6">
                    <p>Some of my projects I’ve recently been active with</p>

                    <div className='recent-repository'>
                        <ul className='row'>
                            {repositoryItems}
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}


// GithubInfoBox.propTypes = {
//   projectName: PropTypes.string.isRequired,
//   thumbnailPath: PropTypes.string.isRequired,
//   projectSummary: PropTypes.string,

// };

export default GithubInfoBox;


function RepositoryItem(props) {
    const repository = props.repository
    return (
        <div className='repository-item'>
            <a className='repository-title' href={repository.html_url} target="_blank" rel="noopener noreferrer">{repository.name}</a>
            <p className='repository-description'>{repository.description}</p>
            <span className='repository-language'>{repository.language}</span>
        </div>
    );
}

RepositoryItem.propTypes = {
    repository: PropTypes.object,
};