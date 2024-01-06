import MatchesController from "../controllers/matches.controller.js";
import TargetsController from "../controllers/target.controller.js";
import moment from 'moment';

const controller = new MatchesController();
const target_controller = new TargetsController();

let matches = {}

async function matches_targets(tournament_id, round, date, local, visit) {
    const match = await controller.create({
        tournament_id,
        date: moment(new Date(date)).day((round - 1) * 7).format('MM/DD/YYYY'),
        local,
        visit,
        round
    });
    if(local && visit){
        await target_controller.create({
            tournament_id,
            team_id: local.team_id,
            match_id: match
        })
        await target_controller.create({
          tournament_id,
          team_id: visit.team_id,
          match_id: match
        });
    }
    return match
}

async function create4teamsMatches(tournament_id, date, team1, team2, team3, team4) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team1, team4);
    matches.match2 = await matches_targets(tournament_id, round, date, team3, team2);
    round = round + 1;
    matches.match3 = await matches_targets(tournament_id, round, date, team3, team1);
    matches.match4 = await matches_targets(tournament_id, round, date, team2, team4);
    round = round + 1;
    matches.match5 = await matches_targets(tournament_id, round, date, team1, team2);
    matches.match6 = await matches_targets(tournament_id, round, date, team4, team3);

    return {...matches};
}

async function create5teamsMatches(tournament_id, date, team1, team2, team3, team4, team5) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team5, team3);
    matches.match2 = await matches_targets(tournament_id, round, date, team4, team2);
    matches.match3 = await matches_targets(tournament_id, round, date, team1, null); 
    round = round + 1;
    matches.match4 = await matches_targets(tournament_id, round, date, team4, team1);
    matches.match5 = await matches_targets(tournament_id, round, date, team2, team5);
    matches.match6 = await matches_targets(tournament_id, round, date, team3, null);
    round = round + 1;
    matches.match7 = await matches_targets(tournament_id, round, date, team1, team3);
    matches.match8 = await matches_targets(tournament_id, round, date, team5, team4);
    matches.match9 = await matches_targets(tournament_id, round, date, team2, null);
    round = round + 1;
    matches.match10 = await matches_targets(tournament_id, round, date, team5, team1);
    matches.match11 = await matches_targets(tournament_id, round, date, team2, team3);
    matches.match12 = await matches_targets(tournament_id, round, date, team4, null);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team1, team2);
    matches.match14 = await matches_targets(tournament_id, round, date, team3, team4);
    matches.match15 = await matches_targets(tournament_id, round, date, team5, null);

    return {...matches}
}

async function create6teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6) {
    let round = 1
    matches.match1 = await matches_targets(tournament_id, round, date, team1, team6);
    matches.match2 = await matches_targets(tournament_id, round, date, team5, team3);
    matches.match3 = await matches_targets(tournament_id, round, date, team4, team2);
    round = round + 1;
    matches.match4 = await matches_targets(tournament_id, round, date, team4, team1);
    matches.match5 = await matches_targets(tournament_id, round, date, team2, team5);
    matches.match6 = await matches_targets(tournament_id, round, date, team3, team6);
    round = round + 1;
    matches.match7 = await matches_targets(tournament_id, round, date, team1, team3);
    matches.match8 = await matches_targets(tournament_id, round, date, team6, team2);
    matches.match9 = await matches_targets(tournament_id, round, date, team5, team4);
    round = round + 1;
    matches.match10 = await matches_targets(tournament_id, round, date, team5, team1);
    matches.match11 = await matches_targets(tournament_id, round, date, team4, team6);
    matches.match12 = await matches_targets(tournament_id, round, date, team2, team3);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team1, team2);
    matches.match14 = await matches_targets(tournament_id, round, date, team3, team4);
    matches.match15 = await matches_targets(tournament_id, round, date, team6, team5);

    return {...matches}
}

async function create7teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team7, team4);
    matches.match2 = await matches_targets(tournament_id, round, date, team6, team3);
    matches.match3 = await matches_targets(tournament_id, round, date, team5, team2);
    matches.match4 = await matches_targets(tournament_id, round, date, team1, null);
    round = round + 1;
    matches.match5 = await matches_targets(tournament_id, round, date, team5, team1);
    matches.match6 = await matches_targets(tournament_id, round, date, team2, team6);
    matches.match7 = await matches_targets(tournament_id, round, date, team3, team7);
    matches.match8 = await matches_targets(tournament_id, round, date, team4, null);
    round = round + 1;
    matches.match9 = await matches_targets(tournament_id, round, date, team1, team4);
    matches.match10 = await matches_targets(tournament_id, round, date, team7, team2);
    matches.match11 = await matches_targets(tournament_id, round, date, team6, team5);
    matches.match12 = await matches_targets(tournament_id, round, date, team3, null);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team6, team1);
    matches.match14 = await matches_targets(tournament_id, round, date, team5, team7);
    matches.match15 = await matches_targets(tournament_id, round, date, team3, team4);
    matches.match16 = await matches_targets(tournament_id, round, date, team2, null);
    round = round + 1;
    matches.match17 = await matches_targets(tournament_id, round, date, team1, team3);
    matches.match18 = await matches_targets(tournament_id, round, date, team4, team2);
    matches.match19 = await matches_targets(tournament_id, round, date, team7, team6);
    matches.match20 = await matches_targets(tournament_id, round, date, team5, null);
    round = round + 1;
    matches.match21 = await matches_targets(tournament_id, round, date, team7, team1);
    matches.match22 = await matches_targets(tournament_id, round, date, team5, team4);
    matches.match23 = await matches_targets(tournament_id, round, date, team2, team3);
    matches.match24 = await matches_targets(tournament_id, round, date, team6, null);
    round = round + 1;
    matches.match25 = await matches_targets(tournament_id, round, date, team1, team2);
    matches.match26 = await matches_targets(tournament_id, round, date, team3, team5);
    matches.match27 = await matches_targets(tournament_id, round, date, team4, team6);
    matches.match28 = await matches_targets(tournament_id, round, date, team7, null);

    return {...matches}
}

async function create8teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team1, team8);
    matches.match2 = await matches_targets(tournament_id, round, date, team7, team4);
    matches.match3 = await matches_targets(tournament_id, round, date, team6, team3);
    matches.match4 = await matches_targets(tournament_id, round, date, team5, team2);
    round = round + 1;
    matches.match5 = await matches_targets(tournament_id, round, date, team5, team1);
    matches.match6 = await matches_targets(tournament_id, round, date, team2, team6);
    matches.match7 = await matches_targets(tournament_id, round, date, team3, team7);
    matches.match8 = await matches_targets(tournament_id, round, date, team4, team8);
    round = round + 1;
    matches.match9 = await matches_targets(tournament_id, round, date, team1, team4);
    matches.match10 = await matches_targets(tournament_id, round, date, team8, team3);
    matches.match11 = await matches_targets(tournament_id, round, date, team7, team2);
    matches.match12 = await matches_targets(tournament_id, round, date, team6, team5);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team6, team1);
    matches.match14 = await matches_targets(tournament_id, round, date, team5, team7);
    matches.match15 = await matches_targets(tournament_id, round, date, team2, team8);
    matches.match16 = await matches_targets(tournament_id, round, date, team3, team4);
    round = round + 1;
    matches.match17 = await matches_targets(tournament_id, round, date, team1, team3);
    matches.match18 = await matches_targets(tournament_id, round, date, team4, team2);
    matches.match19 = await matches_targets(tournament_id, round, date, team8, team5);
    matches.match20 = await matches_targets(tournament_id, round, date, team7, team6);
    round = round + 1;
    matches.match21 = await matches_targets(tournament_id, round, date, team7, team1);
    matches.match22 = await matches_targets(tournament_id, round, date, team6, team8);
    matches.match23 = await matches_targets(tournament_id, round, date, team5, team4);
    matches.match24 = await matches_targets(tournament_id, round, date, team2, team3);
    round = round + 1;
    matches.match25 = await matches_targets(tournament_id, round, date, team1, team2);
    matches.match26 = await matches_targets(tournament_id, round, date, team3, team5);
    matches.match27 = await matches_targets(tournament_id, round, date, team4, team6);
    matches.match28 = await matches_targets(tournament_id, round, date, team8, team7);
    
    return {...matches}
}

async function create9teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8, team9) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team9, team5);
    matches.match2 = await matches_targets(tournament_id, round, date, team8, team4);
    matches.match3 = await matches_targets(tournament_id, round, date, team7, team3);
    matches.match4 = await matches_targets(tournament_id, round, date, team6, team2);
    matches.match5 = await matches_targets(tournament_id, round, date, team1, null);
    round = round + 1;
    matches.match6 = await matches_targets(tournament_id, round, date, team6, team1);
    matches.match7 = await matches_targets(tournament_id, round, date, team2, team7);
    matches.match8 = await matches_targets(tournament_id, round, date, team3, team8);
    matches.match9 = await matches_targets(tournament_id, round, date, team4, team9);
    matches.match10 = await matches_targets(tournament_id, round, date, team5, null);
    round = round + 1;
    matches.match11 = await matches_targets(tournament_id, round, date, team1, team5);
    matches.match12 = await matches_targets(tournament_id, round, date, team9, team3);
    matches.match13 = await matches_targets(tournament_id, round, date, team8, team2);
    matches.match14 = await matches_targets(tournament_id, round, date, team7, team6);
    matches.match15 = await matches_targets(tournament_id, round, date, team4, null);
    round = round + 1;
    matches.match16 = await matches_targets(tournament_id, round, date, team7, team1);
    matches.match17 = await matches_targets(tournament_id, round, date, team6, team8);
    matches.match18 = await matches_targets(tournament_id, round, date, team2, team9);
    matches.match19 = await matches_targets(tournament_id, round, date, team4, team5);
    matches.match20 = await matches_targets(tournament_id, round, date, team3, null);
    round = round + 1;
    matches.match21 = await matches_targets(tournament_id, round, date, team1, team4);
    matches.match22 = await matches_targets(tournament_id, round, date, team5, team3);
    matches.match23 = await matches_targets(tournament_id, round, date, team9, team6);
    matches.match24 = await matches_targets(tournament_id, round, date, team8, team7);
    matches.match25 = await matches_targets(tournament_id, round, date, team2, null);
    round = round + 1;
    matches.match26 = await matches_targets(tournament_id, round, date, team8, team1);
    matches.match27 = await matches_targets(tournament_id, round, date, team7, team9);
    matches.match28 = await matches_targets(tournament_id, round, date, team2, team5);
    matches.match29 = await matches_targets(tournament_id, round, date, team3, team4);
    matches.match30 = await matches_targets(tournament_id, round, date, team6, null);
    round = round + 1;
    matches.match31 = await matches_targets(tournament_id, round, date, team1, team3);
    matches.match32 = await matches_targets(tournament_id, round, date, team4, team2);
    matches.match33 = await matches_targets(tournament_id, round, date, team5, team6);
    matches.match34 = await matches_targets(tournament_id, round, date, team9, team8);
    matches.match35 = await matches_targets(tournament_id, round, date, team7, null);
    round = round + 1;
    matches.match36 = await matches_targets(tournament_id, round, date, team9, team1);
    matches.match37 = await matches_targets(tournament_id, round, date, team7, team5);
    matches.match38 = await matches_targets(tournament_id, round, date, team6, team4);
    matches.match39 = await matches_targets(tournament_id, round, date, team2, team3);
    matches.match40 = await matches_targets(tournament_id, round, date, team8, null);
    round = round + 1;
    matches.match41 = await matches_targets(tournament_id, round, date, team1, team2);
    matches.match42 = await matches_targets(tournament_id, round, date, team3, team6);
    matches.match43 = await matches_targets(tournament_id, round, date, team4, team7);
    matches.match44 = await matches_targets(tournament_id, round, date, team5, team8);
    matches.match45 = await matches_targets(tournament_id, round, date, team9, null);
    return {...matches}
}

async function create10teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team1, team10);
    matches.match2 = await matches_targets(tournament_id, round, date, team9, team5);
    matches.match3 = await matches_targets(tournament_id, round, date, team8, team4);
    matches.match4 = await matches_targets(tournament_id, round, date, team7, team3);
    matches.match5 = await matches_targets(tournament_id, round, date, team6, team2);
    round = round + 1;
    matches.match6 = await matches_targets(tournament_id, round, date, team6, team1);
    matches.match7 = await matches_targets(tournament_id, round, date, team2, team7);
    matches.match8 = await matches_targets(tournament_id, round, date, team3, team8);
    matches.match9 = await matches_targets(tournament_id, round, date, team4, team9);
    matches.match10 = await matches_targets(tournament_id, round, date, team5, team10);
    round = round + 1;
    matches.match11 = await matches_targets(tournament_id, round, date, team1, team5);
    matches.match12 = await matches_targets(tournament_id, round, date, team10, team4);
    matches.match13 = await matches_targets(tournament_id, round, date, team9, team3);
    matches.match14 = await matches_targets(tournament_id, round, date, team8, team2);
    matches.match15 = await matches_targets(tournament_id, round, date, team7, team6);
    round = round + 1;
    matches.match16 = await matches_targets(tournament_id, round, date, team7, team1);
    matches.match17 = await matches_targets(tournament_id, round, date, team6, team8);
    matches.match18 = await matches_targets(tournament_id, round, date, team2, team9);
    matches.match19 = await matches_targets(tournament_id, round, date, team3, team10);
    matches.match20 = await matches_targets(tournament_id, round, date, team4, team5);
    round = round + 1;
    matches.match21 = await matches_targets(tournament_id, round, date, team1, team4);
    matches.match22 = await matches_targets(tournament_id, round, date, team5, team3);
    matches.match23 = await matches_targets(tournament_id, round, date, team10, team2);
    matches.match24 = await matches_targets(tournament_id, round, date, team9, team6);
    matches.match25 = await matches_targets(tournament_id, round, date, team8, team7);
    round = round + 1;
    matches.match26 = await matches_targets(tournament_id, round, date, team8, team1);
    matches.match27 = await matches_targets(tournament_id, round, date, team7, team9);
    matches.match28 = await matches_targets(tournament_id, round, date, team6, team10);
    matches.match29 = await matches_targets(tournament_id, round, date, team2, team5);
    matches.match30 = await matches_targets(tournament_id, round, date, team3, team4);
    round = round + 1;
    matches.match31 = await matches_targets(tournament_id, round, date, team1, team3);
    matches.match32 = await matches_targets(tournament_id, round, date, team4, team2);
    matches.match33 = await matches_targets(tournament_id, round, date, team5, team6);
    matches.match34 = await matches_targets(tournament_id, round, date, team10, team7);
    matches.match35 = await matches_targets(tournament_id, round, date, team9, team8);
    round = round + 1;
    matches.match36 = await matches_targets(tournament_id, round, date, team9, team1);
    matches.match37 = await matches_targets(tournament_id, round, date, team8, team10);
    matches.match38 = await matches_targets(tournament_id, round, date, team7, team5);
    matches.match39 = await matches_targets(tournament_id, round, date, team6, team4);
    matches.match40 = await matches_targets(tournament_id, round, date, team2, team3);
    round = round + 1;
    matches.match41 = await matches_targets(tournament_id, round, date, team1, team2);
    matches.match42 = await matches_targets(tournament_id, round, date, team3, team6);
    matches.match43 = await matches_targets(tournament_id, round, date, team4, team7);
    matches.match44 = await matches_targets(tournament_id, round, date, team5, team8);
    matches.match45 = await matches_targets(tournament_id, round, date, team10, team9);

    return {...matches}
}

async function create11teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11) {
    let round = 1
    matches.match1 = await matches_targets(tournament_id, round, date, team11, team6);
    matches.match2 = await matches_targets(tournament_id, round, date, team10, team5);
    matches.match3 = await matches_targets(tournament_id, round, date, team9, team4);
    matches.match4 = await matches_targets(tournament_id, round, date, team8, team3);
    matches.match5 = await matches_targets(tournament_id, round, date, team7, team2);
    matches.match6 = await matches_targets(tournament_id, round, date, team1, null);
    round = round + 1;
    matches.match7 = await matches_targets(tournament_id, round, date, team7, team1);
    matches.match8 = await matches_targets(tournament_id, round, date, team2, team8);
    matches.match9 = await matches_targets(tournament_id, round, date, team3, team9);
    matches.match10 = await matches_targets(tournament_id, round, date, team4, team10);
    matches.match11 = await matches_targets(tournament_id, round, date, team5, team11);
    matches.match12 = await matches_targets(tournament_id, round, date, team6, null);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team1, team6);
    matches.match14 = await matches_targets(tournament_id, round, date, team11, team4);
    matches.match15 = await matches_targets(tournament_id, round, date, team10, team3);
    matches.match16 = await matches_targets(tournament_id, round, date, team9, team2);
    matches.match17 = await matches_targets(tournament_id, round, date, team8, team7);
    matches.match18 = await matches_targets(tournament_id, round, date, team5, null);
    round = round + 1;
    matches.match19 = await matches_targets(tournament_id, round, date, team8, team1);
    matches.match20 = await matches_targets(tournament_id, round, date, team7, team9);
    matches.match21 = await matches_targets(tournament_id, round, date, team2, team10);
    matches.match22 = await matches_targets(tournament_id, round, date, team3, team11);
    matches.match23 = await matches_targets(tournament_id, round, date, team5, team6);
    matches.match24 = await matches_targets(tournament_id, round, date, team4, null);
    round = round + 1;
    matches.match25 = await matches_targets(tournament_id, round, date, team1, team5);
    matches.match26 = await matches_targets(tournament_id, round, date, team6, team4);
    matches.match27 = await matches_targets(tournament_id, round, date, team11, team2);
    matches.match28 = await matches_targets(tournament_id, round, date, team10, team7);
    matches.match29 = await matches_targets(tournament_id, round, date, team9, team8);
    matches.match30 = await matches_targets(tournament_id, round, date, team3, null);
    round = round + 1;
    matches.match31 = await matches_targets(tournament_id, round, date, team9, team1);
    matches.match32 = await matches_targets(tournament_id, round, date, team8, team10);
    matches.match33 = await matches_targets(tournament_id, round, date, team7, team11);
    matches.match34 = await matches_targets(tournament_id, round, date, team3, team6);
    matches.match35 = await matches_targets(tournament_id, round, date, team4, team5);
    matches.match36 = await matches_targets(tournament_id, round, date, team2, null);
    round = round + 1;
    matches.match37 = await matches_targets(tournament_id, round, date, team1, team4);
    matches.match38 = await matches_targets(tournament_id, round, date, team5, team3);
    matches.match39 = await matches_targets(tournament_id, round, date, team6, team2);
    matches.match40 = await matches_targets(tournament_id, round, date, team11, team8);
    matches.match41 = await matches_targets(tournament_id, round, date, team10, team9);
    matches.match42 = await matches_targets(tournament_id, round, date, team7, null);
    round = round + 1;
    matches.match43 = await matches_targets(tournament_id, round, date, team10, team1);
    matches.match44 = await matches_targets(tournament_id, round, date, team9, team11);
    matches.match45 = await matches_targets(tournament_id, round, date, team7, team6);
    matches.match46 = await matches_targets(tournament_id, round, date, team2, team5);
    matches.match47 = await matches_targets(tournament_id, round, date, team3, team4);
    matches.match48 = await matches_targets(tournament_id, round, date, team8, null);
    round = round + 1;
    matches.match49 = await matches_targets(tournament_id, round, date, team1, team3);
    matches.match50 = await matches_targets(tournament_id, round, date, team4, team2);
    matches.match51 = await matches_targets(tournament_id, round, date, team5, team7);
    matches.match52 = await matches_targets(tournament_id, round, date, team6, team8);
    matches.match53 = await matches_targets(tournament_id, round, date, team11, team10);
    matches.match54 = await matches_targets(tournament_id, round, date, team9, null);
    round = round + 1;
    matches.match55 = await matches_targets(tournament_id, round, date, team11, team1);
    matches.match56 = await matches_targets(tournament_id, round, date, team9, team6);
    matches.match57 = await matches_targets(tournament_id, round, date, team8, team5);
    matches.match58 = await matches_targets(tournament_id, round, date, team7, team4);
    matches.match59 = await matches_targets(tournament_id, round, date, team2, team3);
    matches.match60 = await matches_targets(tournament_id, round, date, team10, null);
    round = round + 1;
    matches.match61 = await matches_targets(tournament_id, round, date, team1, team2);
    matches.match62 = await matches_targets(tournament_id, round, date, team3, team7);
    matches.match63 = await matches_targets(tournament_id, round, date, team4, team8);
    matches.match64 = await matches_targets(tournament_id, round, date, team5, team9);
    matches.match65 = await matches_targets(tournament_id, round, date, team6, team10);
    matches.match66 = await matches_targets(tournament_id, round, date, team11, null);
    
    return {...matches}
}

async function create12teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team1, team12);
    matches.match2 = await matches_targets(tournament_id, round, date, team11, team6);
    matches.match3 = await matches_targets(tournament_id, round, date, team10, team5);
    matches.match4 = await matches_targets(tournament_id, round, date, team9, team4);
    matches.match5 = await matches_targets(tournament_id, round, date, team8, team3);
    matches.match6 = await matches_targets(tournament_id, round, date, team7, team2);
    round = round + 1;
    matches.match7 = await matches_targets(tournament_id, round, date, team7, team1);
    matches.match8 = await matches_targets(tournament_id, round, date, team2, team8);
    matches.match9 = await matches_targets(tournament_id, round, date, team3, team9);
    matches.match10 = await matches_targets(tournament_id, round, date, team4, team10);
    matches.match11 = await matches_targets(tournament_id, round, date, team5, team11);
    matches.match12 = await matches_targets(tournament_id, round, date, team6, team12);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team1, team6);
    matches.match14 = await matches_targets(tournament_id, round, date, team12, team5);
    matches.match15 = await matches_targets(tournament_id, round, date, team11, team4);
    matches.match16 = await matches_targets(tournament_id, round, date, team10, team3);
    matches.match17 = await matches_targets(tournament_id, round, date, team9, team2);
    matches.match18 = await matches_targets(tournament_id, round, date, team8, team7);
    round = round + 1;
    matches.match19 = await matches_targets(tournament_id, round, date, team8, team1);
    matches.match20 = await matches_targets(tournament_id, round, date, team7, team9);
    matches.match21 = await matches_targets(tournament_id, round, date, team2, team10);
    matches.match22 = await matches_targets(tournament_id, round, date, team3, team11);
    matches.match23 = await matches_targets(tournament_id, round, date, team4, team12);
    matches.match24 = await matches_targets(tournament_id, round, date, team5, team6);
    round = round + 1;
    matches.match25 = await matches_targets(tournament_id, round, date, team1, team5);
    matches.match26 = await matches_targets(tournament_id, round, date, team6, team4);
    matches.match27 = await matches_targets(tournament_id, round, date, team12, team3);
    matches.match28 = await matches_targets(tournament_id, round, date, team11, team2);
    matches.match29 = await matches_targets(tournament_id, round, date, team10, team7);
    matches.match30 = await matches_targets(tournament_id, round, date, team9, team8);
    round = round + 1;
    matches.match31 = await matches_targets(tournament_id, round, date, team9, team1);
    matches.match32 = await matches_targets(tournament_id, round, date, team8, team10);
    matches.match33 = await matches_targets(tournament_id, round, date, team7, team11);
    matches.match34 = await matches_targets(tournament_id, round, date, team2, team12);
    matches.match35 = await matches_targets(tournament_id, round, date, team3, team6);
    matches.match36 = await matches_targets(tournament_id, round, date, team4, team5);
    round = round + 1;
    matches.match37 = await matches_targets(tournament_id, round, date, team1, team4);
    matches.match38 = await matches_targets(tournament_id, round, date, team5, team3);
    matches.match39 = await matches_targets(tournament_id, round, date, team6, team2);
    matches.match40 = await matches_targets(tournament_id, round, date, team12, team7);
    matches.match41 = await matches_targets(tournament_id, round, date, team11, team8);
    matches.match42 = await matches_targets(tournament_id, round, date, team10, team9);
    round = round + 1;
    matches.match43 = await matches_targets(tournament_id, round, date, team10, team1);
    matches.match44 = await matches_targets(tournament_id, round, date, team9, team11);
    matches.match45 = await matches_targets(tournament_id, round, date, team8, team12);
    matches.match46 = await matches_targets(tournament_id, round, date, team7, team6);
    matches.match47 = await matches_targets(tournament_id, round, date, team2, team5);
    matches.match48 = await matches_targets(tournament_id, round, date, team3, team4);
    round = round + 1;
    matches.match49 = await matches_targets(tournament_id, round, date, team1, team3);
    matches.match50 = await matches_targets(tournament_id, round, date, team4, team2);
    matches.match51 = await matches_targets(tournament_id, round, date, team5, team7);
    matches.match52 = await matches_targets(tournament_id, round, date, team6, team8);
    matches.match53 = await matches_targets(tournament_id, round, date, team12, team9);
    matches.match54 = await matches_targets(tournament_id, round, date, team11, team10);
    round = round + 1;
    matches.match55 = await matches_targets(tournament_id, round, date, team11, team1);
    matches.match56 = await matches_targets(tournament_id, round, date, team10, team12);
    matches.match57 = await matches_targets(tournament_id, round, date, team9, team6);
    matches.match58 = await matches_targets(tournament_id, round, date, team8, team5);
    matches.match59 = await matches_targets(tournament_id, round, date, team7, team4);
    matches.match60 = await matches_targets(tournament_id, round, date, team2, team3);
    round = round + 1;
    matches.match61 = await matches_targets(tournament_id, round, date, team1, team2);
    matches.match62 = await matches_targets(tournament_id, round, date, team3, team7);
    matches.match63 = await matches_targets(tournament_id, round, date, team4, team8);
    matches.match64 = await matches_targets(tournament_id, round, date, team5, team9);
    matches.match65 = await matches_targets(tournament_id, round, date, team6, team10);
    matches.match66 = await matches_targets(tournament_id, round, date, team12, team11);
    
    return {...matches}
}

async function create13teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team13, team7);
    matches.match2 = await matches_targets(tournament_id, round, date, team12, team6);
    matches.match3 = await matches_targets(tournament_id, round, date, team11, team5);
    matches.match4 = await matches_targets(tournament_id, round, date, team10, team4);
    matches.match5 = await matches_targets(tournament_id, round, date, team9, team3);
    matches.match6 = await matches_targets(tournament_id, round, date, team8, team2);
    matches.match7 = await matches_targets(tournament_id, round, date, team1, null);
    round = round + 1;
    matches.match8 = await matches_targets(tournament_id, round, date, team8, team1);
    matches.match9 = await matches_targets(tournament_id, round, date, team2, team9);
    matches.match10 = await matches_targets(tournament_id, round, date, team3, team10);
    matches.match11 = await matches_targets(tournament_id, round, date, team4, team11);
    matches.match12 = await matches_targets(tournament_id, round, date, team5, team12);
    matches.match13 = await matches_targets(tournament_id, round, date, team6, team13);
    matches.match14 = await matches_targets(tournament_id, round, date, team7, null);
    round = round + 1;
    matches.match15 = await matches_targets(tournament_id, round, date, team1, team7);
    matches.match16 = await matches_targets(tournament_id, round, date, team13, team5);
    matches.match17 = await matches_targets(tournament_id, round, date, team12, team4);
    matches.match18 = await matches_targets(tournament_id, round, date, team11, team3);
    matches.match19 = await matches_targets(tournament_id, round, date, team10, team2);
    matches.match20 = await matches_targets(tournament_id, round, date, team9, team8);
    matches.match21 = await matches_targets(tournament_id, round, date, team6, null);
    round = round + 1;
    matches.match22 = await matches_targets(tournament_id, round, date, team9, team1);
    matches.match23 = await matches_targets(tournament_id, round, date, team8, team10);
    matches.match24 = await matches_targets(tournament_id, round, date, team2, team11);
    matches.match25 = await matches_targets(tournament_id, round, date, team3, team12);
    matches.match26 = await matches_targets(tournament_id, round, date, team4, team13);
    matches.match27 = await matches_targets(tournament_id, round, date, team6, team7);
    matches.match28 = await matches_targets(tournament_id, round, date, team5, null);
    round = round + 1;
    matches.match29 = await matches_targets(tournament_id, round, date, team1, team6);
    matches.match30 = await matches_targets(tournament_id, round, date, team7, team5);
    matches.match31 = await matches_targets(tournament_id, round, date, team13, team3);
    matches.match32 = await matches_targets(tournament_id, round, date, team12, team2);
    matches.match33 = await matches_targets(tournament_id, round, date, team11, team8);
    matches.match34 = await matches_targets(tournament_id, round, date, team10, team9);
    matches.match35 = await matches_targets(tournament_id, round, date, team4, null);
    round = round + 1;
    matches.match36 = await matches_targets(tournament_id, round, date, team10, team1);
    matches.match37 = await matches_targets(tournament_id, round, date, team9, team11);
    matches.match38 = await matches_targets(tournament_id, round, date, team8, team12);
    matches.match39 = await matches_targets(tournament_id, round, date, team2, team13);
    matches.match40 = await matches_targets(tournament_id, round, date, team4, team7);
    matches.match41 = await matches_targets(tournament_id, round, date, team5, team6);
    matches.match42 = await matches_targets(tournament_id, round, date, team3, null);
    round = round + 1;
    matches.match43 = await matches_targets(tournament_id, round, date, team1, team5);
    matches.match44 = await matches_targets(tournament_id, round, date, team6, team4);
    matches.match45 = await matches_targets(tournament_id, round, date, team7, team3);
    matches.match46 = await matches_targets(tournament_id, round, date, team13, team8);
    matches.match47 = await matches_targets(tournament_id, round, date, team12, team9);
    matches.match48 = await matches_targets(tournament_id, round, date, team11, team10);
    matches.match49 = await matches_targets(tournament_id, round, date, team2, null);
    round = round + 1;
    matches.match50 = await matches_targets(tournament_id, round, date, team11, team1);
    matches.match51 = await matches_targets(tournament_id, round, date, team10, team12);
    matches.match52 = await matches_targets(tournament_id, round, date, team9, team13);
    matches.match53 = await matches_targets(tournament_id, round, date, team2, team7);
    matches.match54 = await matches_targets(tournament_id, round, date, team3, team6);
    matches.match55 = await matches_targets(tournament_id, round, date, team4, team5);
    matches.match56 = await matches_targets(tournament_id, round, date, team8, null);
    round = round + 1;
    matches.match57 = await matches_targets(tournament_id, round, date, team1, team4);
    matches.match58 = await matches_targets(tournament_id, round, date, team5, team3);
    matches.match59 = await matches_targets(tournament_id, round, date, team6, team2);
    matches.match60 = await matches_targets(tournament_id, round, date, team7, team8);
    matches.match61 = await matches_targets(tournament_id, round, date, team13, team10);
    matches.match62 = await matches_targets(tournament_id, round, date, team12, team11);
    matches.match63 = await matches_targets(tournament_id, round, date, team9, null);
    round = round + 1;
    matches.match64 = await matches_targets(tournament_id, round, date, team12, team1);
    matches.match65 = await matches_targets(tournament_id, round, date, team11, team13);
    matches.match66 = await matches_targets(tournament_id, round, date, team9, team7);
    matches.match67 = await matches_targets(tournament_id, round, date, team8, team6);
    matches.match68 = await matches_targets(tournament_id, round, date, team2, team5);
    matches.match69 = await matches_targets(tournament_id, round, date, team3, team4);
    matches.match70 = await matches_targets(tournament_id, round, date, team10, null);
    round = round + 1;
    matches.match71 = await matches_targets(tournament_id, round, date, team1, team3);
    matches.match72= await matches_targets(tournament_id, round, date, team4, team2);
    matches.match73 = await matches_targets(tournament_id, round, date, team5, team8);
    matches.match74 = await matches_targets(tournament_id, round, date, team6, team9);
    matches.match75 = await matches_targets(tournament_id, round, date, team7, team10);
    matches.match76 = await matches_targets(tournament_id, round, date, team13, team12);
    matches.match77 = await matches_targets(tournament_id, round, date, team11, null);
    round = round + 1;
    matches.match78 = await matches_targets(tournament_id, round, date, team13, team1);
    matches.match79 = await matches_targets(tournament_id, round, date, team11, team7);
    matches.match80 = await matches_targets(tournament_id, round, date, team10, team6);
    matches.match81 = await matches_targets(tournament_id, round, date, team9, team5);
    matches.match82 = await matches_targets(tournament_id, round, date, team8, team4);
    matches.match83 = await matches_targets(tournament_id, round, date, team2, team3);
    matches.match84 = await matches_targets(tournament_id, round, date, team12, null);
    round = round + 1;
    matches.match85 = await matches_targets(tournament_id, round, date, team1, team2);
    matches.match86 = await matches_targets(tournament_id, round, date, team3, team8);
    matches.match87 = await matches_targets(tournament_id, round, date, team4, team9);
    matches.match88 = await matches_targets(tournament_id, round, date, team5, team10);
    matches.match89 = await matches_targets(tournament_id, round, date, team6, team11);
    matches.match90 = await matches_targets(tournament_id, round, date, team7, team12);
    matches.match91 = await matches_targets(tournament_id, round, date, team13, null);
   
    return {...matches}
}

export async function createMatches(teams_quantity, tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13) {
  if (teams_quantity == 4) 
    return await create4teamsMatches(tournament_id, date, team1, team2, team3, team4);
  if (teams_quantity == 5) 
    return await create5teamsMatches(tournament_id, date, team1, team2, team3, team4, team5);
  if (teams_quantity == 6)
    return await create6teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6);
  if (teams_quantity === 7)
    return await create7teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7);
  if (teams_quantity === 8)
    return await create8teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8);
  if (teams_quantity === 9)
    return await create9teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8, team9);
  if (teams_quantity === 10)
    return await create10teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10);
  if (teams_quantity === 11)
    return await create11teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11);
  if (teams_quantity === 12)
    return await create12teamsMatches(tournament_id, date, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12);
  if (teams_quantity === 13)
    return await create13teamsMatches(tournament_id, date, team1, team2, team3, team4,  team5, team6, team7, team8, team9, team10, team11, team12, team13);
}