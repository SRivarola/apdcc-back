import MatchesController from "../controllers/matches.controller.js"
import moment from 'moment';

let controller = new MatchesController()

let matches = {}

async function create4teamsMatches(tournament_id, date, team1, team2, team3, team4) {
    let round = 1;
    matches.match1 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team4,
        round
    });
    matches.match2 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team2,
        round
    });
    round = round + 1;
    matches.match3 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team1,
        round
    });
    matches.match4 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team4,
        round
    });
    round = round + 1;
    matches.match5 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team2,
        round
    });
    matches.match6 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team3,
        round
    });
    return {...matches};
}

async function create5teamsMatches(tournament_id, team1, team2, team3, team4, team5) {
    let round = 1;
    matches.match1 = await controller.create({
        tournament_id,    
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),    
        local_id: team5,
        visit_id: team3,
        round
    });
    matches.match2 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team2,
        round
    });
    matches.match3 = await controller.create({
        tournament_id,  
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),      
        local_id: team1,
        visit_id: null,
        round
    }); 
    round = round + 1;
    matches.match4 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team1,
        round
    });
    matches.match5 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team5,
        round
    });
    matches.match6 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match7 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team3,
        round
    });
    matches.match8 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team4,
        round
    });
    matches.match9 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match10 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team1,
        round
    });
    matches.match11 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team3,
        round
    });
    matches.match12 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match13 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team2,
        round
    });
    matches.match14 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team4,
        round
    });
    matches.match15 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: null,
        round
    });
    return {...matches}
}

async function create6teamsMatches(tournament_id, team1, team2, team3, team4, team5, team6) {
    let round = 1
    matches.match1 = await controller.create({
        tournament_id,  
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),      
        local_id: team1,
        visit_id: team6,
        round
    });
    matches.match2 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team3,
        round
    });
    matches.match3 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team2,
        round
    });
    round = round + 1;
    matches.match4 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team1,
        round
    });
    matches.match5 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team5,
        round
    });
    matches.match6 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team6,
        round
    });
    round = round + 1;
    matches.match7 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team3,
        round
    });
    matches.match8 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team2,
        round
    });
    matches.match9 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team4,
        round
    });
    round = round + 1;
    matches.match10 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team1,
        round
    });
    matches.match11 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team6,
        round
    });
    matches.match12 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team3,
        round
    });
    round = round + 1;
    matches.match13 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team2,
        round
    });
    matches.match14 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team4,
        round
    });
    matches.match15 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team5,
        round
    });
    return {...matches}
}

async function create7teamsMatches(tournament_id, team1, team2, team3, team4, team5, team6, team7) {
    let round = 1;
    matches.match1 = await controller.create({
        tournament_id,   
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),     
        local_id: team7,
        visit_id: team4,
        round
    });
    matches.match2 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team3,
        round
    });
    matches.match3 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team2,
        round
    });
    matches.match4 = await controller.create({
        tournament_id,      
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),  
        local_id: team1,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match5 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team1,
        round
    });
    matches.match6 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team6,
        round
    });
    matches.match7 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team7,
        round
    });
    matches.match8 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match9 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team4,
        round
    });
    matches.match10 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team2,
        round
    });
    matches.match11 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team5,
        round
    });
    matches.match12 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match13 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team1,
        round
    });
    matches.match14 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team7,
        round
    });
    matches.match15 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team4,
        round
    });
    matches.match16 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match17 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team3,
        round
    });
    matches.match18 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team2,
        round
    });
    matches.match19 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team6,
        round
    });
    matches.match20 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match21 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team1,
        round
    });
    matches.match22 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team4,
        round
    });
    matches.match23 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team3,
        round
    });
    matches.match24 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match25 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team2,
        round
    });
    matches.match26 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team5,
        round
    });
    matches.match27 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team6,
        round
    });
    matches.match28 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: null,
        round
    });
    return {...matches}
}

async function create8teamsMatches(tournament_id, team1, team2, team3, team4, team5, team6, team7, team8) {
    let round = 1;
    matches.match1 = await controller.create({
        tournament_id,    
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),    
        local_id: team1,
        visit_id: team8,
        round
    });
    matches.match2 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team4,
        round
    });
    matches.match3 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team3,
        round
    });
    matches.match4 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team2,
        round
    });
    round = round + 1;
    matches.match5 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team1,
        round
    });
    matches.match6 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team6,
        round
    });
    matches.match7 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team7,
        round
    });
    matches.match8 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team8,
        round
    });
    round = round + 1;
    matches.match9 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team4,
        round
    });
    matches.match10 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team3,
        round
    });
    matches.match11 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team2,
        round
    });
    matches.match12 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team5,
        round
    });
    round = round + 1;
    matches.match13 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team1,
        round
    });
    matches.match14 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team7,
        round
    });
    matches.match15 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team8,
        round
    });
    matches.match16 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team4,
        round
    });
    round = round + 1;
    matches.match17 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team3,
        round
    });
    matches.match18 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team2,
        round
    });
    matches.match19 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team5,
        round
    });
    matches.match20 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team6,
        round
    });
    round = round + 1;
    matches.match21 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team1,
        round
    });
    matches.match22 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team8,
        round
    });
    matches.match23 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team4,
        round
    });
    matches.match24 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team3,
        round
    });
    round = round + 1;
    matches.match25 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team2,
        round
    });
    matches.match26 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team5,
        round
    });
    matches.match27 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team6,
        round
    });
    matches.match28 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team7,
        round
    });
    return {...matches}
}

async function create9teamsMatches(tournament_id, team1, team2, team3, team4, team5, team6, team7, team8, team9) {
    let round = 1;
    matches.match1 = await controller.create({
        tournament_id,  
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),      
        local_id: team9,
        visit_id: team5,
        round
    });
    matches.match2 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team4,
        round
    });
    matches.match3 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team3,
        round
    });
    matches.match4 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team2,
        round
    });
    matches.match5 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match6 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team1,
        round
    });
    matches.match7 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team7,
        round
    });
    matches.match8 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team8,
        round
    });
    matches.match9 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team9,
        round
    });
    matches.match10 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match11 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team5,
        round
    });
    matches.match12 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team3,
        round
    });
    matches.match13 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team2,
        round
    });
    matches.match14 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team6,
        round
    });
    matches.match15 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match16 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team1,
        round
    });
    matches.match17 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team8,
        round
    });
    matches.match18 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team9,
        round
    });
    matches.match19 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team5,
        round
    });
    matches.match20 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match21 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team4,
        round
    });
    matches.match22 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team3,
        round
    });
    matches.match23 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team6,
        round
    });
    matches.match24 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team7,
        round
    });
    matches.match25 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match26 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team1,
        round
    });
    matches.match27 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team9,
        round
    });
    matches.match28 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team5,
        round
    });
    matches.match29 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team4,
        round
    });
    matches.match30 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match31 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team3,
        round
    });
    matches.match32 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team2,
        round
    });
    matches.match33 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team6,
        round
    });
    matches.match34 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team8,
        round
    });
    matches.match35 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match36 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team1,
        round
    });
    matches.match37 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team5,
        round
    });
    matches.match38 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team4,
        round
    });
    matches.match39 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team3,
        round
    });
    matches.match40 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match41 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team2,
        round
    });
    matches.match42 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team6,
        round
    });
    matches.match43 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team7,
        round
    });
    matches.match44 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team8,
        round
    });
    matches.match45 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: null,
        round
    });
    return {...matches}
}

async function create10teamsMatches(tournament_id, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10) {
    let round = 1;
    matches.match1 = await controller.create({
        tournament_id,   
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),     
        local_id: team1,
        visit_id: team10,
        round
    });
    matches.match2 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team5,
        round
    });
    matches.match3 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team4,
        round
    });
    matches.match4 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team3,
        round
    });
    matches.match5 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team2,
        round
    });
    round = round + 1;
    matches.match6 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team1,
        round
    });
    matches.match7 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team7,
        round
    });
    matches.match8 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team8,
        round
    });
    matches.match9 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team9,
        round
    });
    matches.match10 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team10,
        round
    });
    round = round + 1;
    matches.match11 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team5,
        round
    });
    matches.match12 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team4,
        round
    });
    matches.match13 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team3,
        round
    });
    matches.match14 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team2,
        round
    });
    matches.match15 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team6,
        round
    });
    round = round + 1;
    matches.match16 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team1,
        round
    });
    matches.match17 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team8,
        round
    });
    matches.match18 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team9,
        round
    });
    matches.match19 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team10,
        round
    });
    matches.match20 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team5,
        round
    });
    round = round + 1;
    matches.match21 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team4,
        round
    });
    matches.match22 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team3,
        round
    });
    matches.match23 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team2,
        round
    });
    matches.match24 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team6,
        round
    });
    matches.match25 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team7,
        round
    });
    round = round + 1;
    matches.match26 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team1,
        round
    });
    matches.match27 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team9,
        round
    });
    matches.match28 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team10,
        round
    });
    matches.match29 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team5,
        round
    });
    matches.match30 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team4,
        round
    });
    round = round + 1;
    matches.match31 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team3,
        round
    });
    matches.match32 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team2,
        round
    });
    matches.match33 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team6,
        round
    });
    matches.match34 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team7,
        round
    });
    matches.match35 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team8,
        round
    });
    round = round + 1;
    matches.match36 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team1,
        round
    });
    matches.match37 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team10,
        round
    });
    matches.match38 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team5,
        round
    });
    matches.match39 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team4,
        round
    });
    matches.match40 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team3,
        round
    });
    round = round + 1;
    matches.match41 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team2,
        round
    });
    matches.match42 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team6,
        round
    });
    matches.match43 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team7,
        round
    });
    matches.match44 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team8,
        round
    });
    matches.match45 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team9,
        round
    });
    return {...matches}
}

async function create11teamsMatches(tournament_id, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11) {
    let round = 1
    matches.match1 = await controller.create({
        tournament_id, 
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),       
        local_id: team11,
        visit_id: team6,
        round
    });
    matches.match2 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team5,
        round
    });
    matches.match3 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team4,
        round
    });
    matches.match4 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team3,
        round
    });
    matches.match5 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team2,
        round
    });
    matches.match6 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match7 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team1,
        round
    });
    matches.match8 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team8,
        round
    });
    matches.match9 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team9,
        round
    });
    matches.match10 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team10,
        round
    });
    matches.match11 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team11,
        round
    });
    matches.match12 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match13 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team6,
        round
    });
    matches.match14 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team4,
        round
    });
    matches.match15 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team3,
        round
    });
    matches.match16 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team2,
        round
    });
    matches.match17 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team7,
        round
    });
    matches.match18 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match19 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team1,
        round
    });
    matches.match20 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team9,
        round
    });
    matches.match21 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team10,
        round
    });
    matches.match22 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team11,
        round
    });
    matches.match23 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team6,
        round
    });
    matches.match24 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match25 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team5,
        round
    });
    matches.match26 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team4,
        round
    });
    matches.match27 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team2,
        round
    });
    matches.match28 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team7,
        round
    });
    matches.match29 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team8,
        round
    });
    matches.match30 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match31 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team1,
        round
    });
    matches.match32 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team10,
        round
    });
    matches.match33 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team11,
        round
    });
    matches.match34 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team6,
        round
    });
    matches.match35 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team5,
        round
    });
    matches.match36 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match37 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team4,
        round
    });
    matches.match38 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team3,
        round
    });
    matches.match39 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team2,
        round
    });
    matches.match40 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team8,
        round
    });
    matches.match41 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team9,
        round
    });
    matches.match42 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match43 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team1,
        round
    });
    matches.match44 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team11,
        round
    });
    matches.match45 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team6,
        round
    });
    matches.match46 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team5,
        round
    });
    matches.match47 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team4,
        round
    });
    matches.match48 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match49 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team3,
        round
    });
    matches.match50 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team2,
        round
    });
    matches.match51 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team7,
        round
    });
    matches.match52 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team8,
        round
    });
    matches.match53 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team10,
        round
    });
    matches.match54 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match55 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team1,
        round
    });
    matches.match56 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team6,
        round
    });
    matches.match57 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team5,
        round
    });
    matches.match58 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team4,
        round
    });
    matches.match59 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team3,
        round
    });
    matches.match60 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match61 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team2,
        round
    });
    matches.match62 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team7,
        round
    });
    matches.match63 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team8,
        round
    });
    matches.match64 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team9,
        round
    });
    matches.match65 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team10,
        round
    });
    matches.match66 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: null,
        round
    });
    return {...matches}
}

async function create12teamsMatches(tournament_id, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12) {
    let round = 1;
    matches.match1 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team12,
        round
    });
    matches.match2 = await controller.create({
        tournament_id,    
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),    
        local_id: team11,
        visit_id: team6,
        round
    });
    matches.match3 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team5,
        round
    });
    matches.match4 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team4,
        round
    });
    matches.match5 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team3,
        round
    });
    matches.match6 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team2,
        round
    });
    round = round + 1;
    matches.match7 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team1,
        round
    });
    matches.match8 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team8,
        round
    });
    matches.match9 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team9,
        round
    });
    matches.match10 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team10,
        round
    });
    matches.match11 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team11,
        round
    });
    matches.match12 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team12,
        round
    });
    round = round + 1;
    matches.match13 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team6,
        round
    });
    matches.match14 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team12,
        visit_id: team5,
        round
    });
    matches.match15 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team4,
        round
    });
    matches.match16 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team3,
        round
    });
    matches.match17 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team2,
        round
    });
    matches.match18 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team7,
        round
    });
    round = round + 1;
    matches.match19 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team1,
        round
    });
    matches.match20 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team9,
        round
    });
    matches.match21 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team10,
        round
    });
    matches.match22 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team11,
        round
    });
    matches.match23 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team12,
        round
    });
    matches.match24 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team6,
        round
    });
    round = round + 1;
    matches.match25 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team5,
        round
    });
    matches.match26 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team4,
        round
    });
    matches.match27 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team12,
        visit_id: team3,
        round
    });
    matches.match28 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team2,
        round
    });
    matches.match29 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team7,
        round
    });
    matches.match30 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team8,
        round
    });
    round = round + 1;
    matches.match31 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team1,
        round
    });
    matches.match32 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team10,
        round
    });
    matches.match33 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team11,
        round
    });
    matches.match34 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team12,
        round
    });
    matches.match35 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team6,
        round
    });
    matches.match36 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team5,
        round
    });
    round = round + 1;
    matches.match37 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team4,
        round
    });
    matches.match38 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team3,
        round
    });
    matches.match39 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team2,
        round
    });
    matches.match40 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team12,
        visit_id: team7,
        round
    });
    matches.match41 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team8,
        round
    });
    matches.match42 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team9,
        round
    });
    round = round + 1;
    matches.match43 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team1,
        round
    });
    matches.match44 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team11,
        round
    });
    matches.match45 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team12,
        round
    });
    matches.match46 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team6,
        round
    });
    matches.match47 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team5,
        round
    });
    matches.match48 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team4,
        round
    });
    round = round + 1;
    matches.match49 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team3,
        round
    });
    matches.match50 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team2,
        round
    });
    matches.match51 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team7,
        round
    });
    matches.match52 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team8,
        round
    });
    matches.match53 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team12,
        visit_id: team9,
        round
    });
    matches.match54 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team10,
        round
    });
    round = round + 1;
    matches.match55 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team1,
        round
    });
    matches.match56 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team12,
        round
    });
    matches.match57 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team6,
        round
    });
    matches.match58 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team5,
        round
    });
    matches.match59 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team4,
        round
    });
    matches.match60 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team3,
        round
    });
    round = round + 1;
    matches.match61 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team2,
        round
    });
    matches.match62 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team7,
        round
    });
    matches.match63 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team8,
        round
    });
    matches.match64 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team9,
        round
    });
    matches.match65 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team10,
        round
    });
    matches.match66 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team12,
        visit_id: team11,
        round
    });
    return {...matches}
}

async function create13teamsMatches(tournament_id, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13) {
    let round = 1;
    matches.match1 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team13,
        visit_id: team7,
        round
    });
    matches.match2 = await controller.create({
        tournament_id,    
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),    
        local_id: team12,
        visit_id: team6,
        round
    });
    matches.match3 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team5,
        round
    });
    matches.match4 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team4,
        round
    });
    matches.match5 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team3,
        round
    });
    matches.match6 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team2,
        round
    });
    matches.match7 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match8 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team1,
        round
    });
    matches.match9 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team9,
        round
    });
    matches.match10 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team10,
        round
    });
    matches.match11 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team11,
        round
    });
    matches.match12 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team12,
        round
    });
    matches.match13 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team13,
        round
    });
    matches.match14 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match15 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team7,
        round
    });
    matches.match16 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team13,
        visit_id: team5,
        round
    });
    matches.match17 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team12,
        visit_id: team4,
        round
    });
    matches.match18 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team3,
        round
    });
    matches.match19 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team2,
        round
    });
    matches.match20 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team8,
        round
    });
    matches.match21 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match22 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team1,
        round
    });
    matches.match23 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team10,
        round
    });
    matches.match24 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team11,
        round
    });
    matches.match25 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team12,
        round
    });
    matches.match26 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team13,
        round
    });
    matches.match27 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team7,
        round
    });
    matches.match28 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match29 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team6,
        round
    });
    matches.match30 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team5,
        round
    });
    matches.match31 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team13,
        visit_id: team3,
        round
    });
    matches.match32 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team12,
        visit_id: team2,
        round
    });
    matches.match33 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team8,
        round
    });
    matches.match34 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team9,
        round
    });
    matches.match35 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match36 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team1,
        round
    });
    matches.match37 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team11,
        round
    });
    matches.match38 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team12,
        round
    });
    matches.match39 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team13,
        round
    });
    matches.match40 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team7,
        round
    });
    matches.match41 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team6,
        round
    });
    matches.match42 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match43 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team5,
        round
    });
    matches.match44 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team4,
        round
    });
    matches.match45 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team3,
        round
    });
    matches.match46 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team13,
        visit_id: team8,
        round
    });
    matches.match47 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team12,
        visit_id: team9,
        round
    });
    matches.match48 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team10,
        round
    });
    matches.match49 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match50 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team4,
        round
    });
    matches.match51 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team12,
        round
    });
    matches.match52 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team13,
        round
    });
    matches.match53 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team7,
        round
    });
    matches.match54 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team6,
        round
    });
    matches.match55 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team5,
        round
    });
    matches.match56 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match57 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team4,
        round
    });
    matches.match58 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team3,
        round
    });
    matches.match59 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team2,
        round
    });
    matches.match60 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team8,
        round
    });
    matches.match61 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team13,
        visit_id: team10,
        round
    });
    matches.match62 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team12,
        visit_id: team11,
        round
    });
    matches.match63 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match64 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team12,
        visit_id: team1,
        round
    });
    matches.match65 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team13,
        round
    });
    matches.match66 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team7,
        round
    });
    matches.match67 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team6,
        round
    });
    matches.match68 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team5,
        round
    });
    matches.match69 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team4,
        round
    });
    matches.match70 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match71 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team3,
        round
    });
    matches.match72 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team2,
        round
    });
    matches.match73 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team8,
        round
    });
    matches.match74 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team9,
        round
    });
    matches.match75 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team10,
        round
    });
    matches.match76 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team13,
        visit_id: team12,
        round
    });
    matches.match77 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match78 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team13,
        visit_id: team1,
        round
    });
    matches.match79 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team11,
        visit_id: team7,
        round
    });
    matches.match80 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team10,
        visit_id: team6,
        round
    });
    matches.match81 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team9,
        visit_id: team5,
        round
    });
    matches.match82 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team8,
        visit_id: team4,
        round
    });
    matches.match83 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team2,
        visit_id: team3,
        round
    });
    matches.match84 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team12,
        visit_id: null,
        round
    });
    round = round + 1;
    matches.match85 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team1,
        visit_id: team2,
        round
    });
    matches.match86 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team3,
        visit_id: team8,
        round
    });
    matches.match87 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team4,
        visit_id: team9,
        round
    });
    matches.match88 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team5,
        visit_id: team10,
        round
    });
    matches.match89 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team6,
        visit_id: team11,
        round
    });
    matches.match90 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team7,
        visit_id: team12,
        round
    });
    matches.match91 = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('DD/MM/YYYY'),
        local_id: team13,
        visit_id: null,
        round
    });
    return {...matches}
}

export async function createMatches(
  teams_quantity,
  tournament_id,
  date,
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
  team8,
  team9,
  team10,
  team11,
  team12,
  team13
) {
  if (teams_quantity == 4) 
    return await create4teamsMatches(
      tournament_id, 
      date,
      team1, 
      team2, 
      team3, 
      team4
    );
  if (teams_quantity == 5) 
    return await create4teamsMatches(
      tournament_id, 
      date,
      team1, 
      team2, 
      team3, 
      team4, 
      team5
    );
  if (teams_quantity == 6)
    return await create4teamsMatches(
      tournament_id,
      date,
      team1,
      team2,
      team3,
      team4,
      team5,
      team6
    );
  if (teams_quantity === 7)
    return await create4teamsMatches(
      tournament_id,
      date,
      team1,
      team2,
      team3,
      team4,
      team5,
      team6,
      team7
    );
  if (teams_quantity === 8)
    return await create4teamsMatches(
      tournament_id,
      date,
      team1,
      team2,
      team3,
      team4,
      team5,
      team6,
      team7,
      team8
    );
  if (teams_quantity === 9)
    return await create4teamsMatches(
      tournament_id,
      date,
      team1,
      team2,
      team3,
      team4,
      team5,
      team6,
      team7,
      team8,
      team9
    );
  if (teams_quantity === 10)
    return await create4teamsMatches(
      tournament_id,
      date,
      team1,
      team2,
      team3,
      team4,
      team5,
      team6,
      team7,
      team8,
      team9,
      team10
    );
  if (teams_quantity === 11)
    return await create4teamsMatches(
      tournament_id,
      date,
      team1,
      team2,
      team3,
      team4,
      team5,
      team6,
      team7,
      team8,
      team9,
      team10,
      team11
    );
  if (teams_quantity === 12)
    return await create4teamsMatches(
      tournament_id,
      date,
      team1,
      team2,
      team3,
      team4,
      team5,
      team6,
      team7,
      team8,
      team9,
      team10,
      team11,
      team12
    );
  if (teams_quantity === 13)
    return await create4teamsMatches(
      tournament_id,
      date,
      team1,
      team2,
      team3,
      team4,
      team5,
      team6,
      team7,
      team8,
      team9,
      team10,
      team11,
      team12,
      team13
    );
}