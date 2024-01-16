import MatchesController from "../controllers/matches.controller.js";
import TargetsController from "../controllers/target.controller.js";
import moment from 'moment';

const controller = new MatchesController();
const target_controller = new TargetsController();

let matches = {}

async function matches_targets(tournament_id, round, date, local, visit, time) {
    const thisRound = (round - 1) * 7
    const newDate = moment(date).add(thisRound, 'days');

    const match = await controller.create({
      tournament_id,
      date: newDate,
      time,
      local,
      visit,
      round,
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

async function create4teamsMatches(tournament_id, date, time, team1, team2, team3, team4) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team1, team4, time);
    matches.match2 = await matches_targets(tournament_id, round, date, team3, team2, time);
    round = round + 1;
    matches.match3 = await matches_targets(tournament_id, round, date, team3, team1, time);
    matches.match4 = await matches_targets(tournament_id, round, date, team2, team4, time);
    round = round + 1;
    matches.match5 = await matches_targets(tournament_id, round, date, team1, team2, time);
    matches.match6 = await matches_targets(tournament_id, round, date, team4, team3, time);

    return {...matches};
}

async function create5teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team5, team3, time);
    matches.match2 = await matches_targets(tournament_id, round, date, team4, team2, time);
    matches.match3 = await matches_targets(tournament_id, round, date, team1, null, time); 
    round = round + 1;
    matches.match4 = await matches_targets(tournament_id, round, date, team4, team1, time);
    matches.match5 = await matches_targets(tournament_id, round, date, team2, team5, time);
    matches.match6 = await matches_targets(tournament_id, round, date, team3, null, time);
    round = round + 1;
    matches.match7 = await matches_targets(tournament_id, round, date, team1, team3, time);
    matches.match8 = await matches_targets(tournament_id, round, date, team5, team4, time);
    matches.match9 = await matches_targets(tournament_id, round, date, team2, null, time);
    round = round + 1;
    matches.match10 = await matches_targets(tournament_id, round, date, team5, team1, time);
    matches.match11 = await matches_targets(tournament_id, round, date, team2, team3, time);
    matches.match12 = await matches_targets(tournament_id, round, date, team4, null, time);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team1, team2, time);
    matches.match14 = await matches_targets(tournament_id, round, date, team3, team4, time);
    matches.match15 = await matches_targets(tournament_id, round, date, team5, null, time);

    return {...matches}
}

async function create6teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6) {
    let round = 1
    matches.match1 = await matches_targets(tournament_id, round, date, team1, team6, time);
    matches.match2 = await matches_targets(tournament_id, round, date, team5, team3, time);
    matches.match3 = await matches_targets(tournament_id, round, date, team4, team2, time);
    round = round + 1;
    matches.match4 = await matches_targets(tournament_id, round, date, team4, team1, time);
    matches.match5 = await matches_targets(tournament_id, round, date, team2, team5, time);
    matches.match6 = await matches_targets(tournament_id, round, date, team3, team6, time);
    round = round + 1;
    matches.match7 = await matches_targets(tournament_id, round, date, team1, team3, time);
    matches.match8 = await matches_targets(tournament_id, round, date, team6, team2, time);
    matches.match9 = await matches_targets(tournament_id, round, date, team5, team4, time);
    round = round + 1;
    matches.match10 = await matches_targets(tournament_id, round, date, team5, team1, time);
    matches.match11 = await matches_targets(tournament_id, round, date, team4, team6, time);
    matches.match12 = await matches_targets(tournament_id, round, date, team2, team3, time);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team1, team2, time);
    matches.match14 = await matches_targets(tournament_id, round, date, team3, team4, time);
    matches.match15 = await matches_targets(tournament_id, round, date, team6, team5, time);

    return {...matches}
}

async function create7teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team7, team4, time);
    matches.match2 = await matches_targets(tournament_id, round, date, team6, team3, time);
    matches.match3 = await matches_targets(tournament_id, round, date, team5, team2, time);
    matches.match4 = await matches_targets(tournament_id, round, date, team1, null, time);
    round = round + 1;
    matches.match5 = await matches_targets(tournament_id, round, date, team5, team1, time);
    matches.match6 = await matches_targets(tournament_id, round, date, team2, team6, time);
    matches.match7 = await matches_targets(tournament_id, round, date, team3, team7, time);
    matches.match8 = await matches_targets(tournament_id, round, date, team4, null, time);
    round = round + 1;
    matches.match9 = await matches_targets(tournament_id, round, date, team1, team4, time);
    matches.match10 = await matches_targets(tournament_id, round, date, team7, team2, time);
    matches.match11 = await matches_targets(tournament_id, round, date, team6, team5, time);
    matches.match12 = await matches_targets(tournament_id, round, date, team3, null, time);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team6, team1, time);
    matches.match14 = await matches_targets(tournament_id, round, date, team5, team7, time);
    matches.match15 = await matches_targets(tournament_id, round, date, team3, team4, time);
    matches.match16 = await matches_targets(tournament_id, round, date, team2, null, time);
    round = round + 1;
    matches.match17 = await matches_targets(tournament_id, round, date, team1, team3, time);
    matches.match18 = await matches_targets(tournament_id, round, date, team4, team2, time);
    matches.match19 = await matches_targets(tournament_id, round, date, team7, team6, time);
    matches.match20 = await matches_targets(tournament_id, round, date, team5, null, time);
    round = round + 1;
    matches.match21 = await matches_targets(tournament_id, round, date, team7, team1, time);
    matches.match22 = await matches_targets(tournament_id, round, date, team5, team4, time);
    matches.match23 = await matches_targets(tournament_id, round, date, team2, team3, time);
    matches.match24 = await matches_targets(tournament_id, round, date, team6, null, time);
    round = round + 1;
    matches.match25 = await matches_targets(tournament_id, round, date, team1, team2, time);
    matches.match26 = await matches_targets(tournament_id, round, date, team3, team5, time);
    matches.match27 = await matches_targets(tournament_id, round, date, team4, team6, time);
    matches.match28 = await matches_targets(tournament_id, round, date, team7, null, time);

    return {...matches}
}

async function create8teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team1, team8, time);
    matches.match2 = await matches_targets(tournament_id, round, date, team7, team4, time);
    matches.match3 = await matches_targets(tournament_id, round, date, team6, team3, time);
    matches.match4 = await matches_targets(tournament_id, round, date, team5, team2, time);
    round = round + 1;
    matches.match5 = await matches_targets(tournament_id, round, date, team5, team1, time);
    matches.match6 = await matches_targets(tournament_id, round, date, team2, team6, time);
    matches.match7 = await matches_targets(tournament_id, round, date, team3, team7, time);
    matches.match8 = await matches_targets(tournament_id, round, date, team4, team8, time);
    round = round + 1;
    matches.match9 = await matches_targets(tournament_id, round, date, team1, team4, time);
    matches.match10 = await matches_targets(tournament_id, round, date, team8, team3, time);
    matches.match11 = await matches_targets(tournament_id, round, date, team7, team2, time);
    matches.match12 = await matches_targets(tournament_id, round, date, team6, team5, time);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team6, team1, time);
    matches.match14 = await matches_targets(tournament_id, round, date, team5, team7, time);
    matches.match15 = await matches_targets(tournament_id, round, date, team2, team8, time);
    matches.match16 = await matches_targets(tournament_id, round, date, team3, team4, time);
    round = round + 1;
    matches.match17 = await matches_targets(tournament_id, round, date, team1, team3, time);
    matches.match18 = await matches_targets(tournament_id, round, date, team4, team2, time);
    matches.match19 = await matches_targets(tournament_id, round, date, team8, team5, time);
    matches.match20 = await matches_targets(tournament_id, round, date, team7, team6, time);
    round = round + 1;
    matches.match21 = await matches_targets(tournament_id, round, date, team7, team1, time);
    matches.match22 = await matches_targets(tournament_id, round, date, team6, team8, time);
    matches.match23 = await matches_targets(tournament_id, round, date, team5, team4, time);
    matches.match24 = await matches_targets(tournament_id, round, date, team2, team3, time);
    round = round + 1;
    matches.match25 = await matches_targets(tournament_id, round, date, team1, team2, time);
    matches.match26 = await matches_targets(tournament_id, round, date, team3, team5, time);
    matches.match27 = await matches_targets(tournament_id, round, date, team4, team6, time);
    matches.match28 = await matches_targets(tournament_id, round, date, team8, team7, time);
    
    return {...matches}
}

async function create9teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8, team9) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team9, team5, time);
    matches.match2 = await matches_targets(tournament_id, round, date, team8, team4, time);
    matches.match3 = await matches_targets(tournament_id, round, date, team7, team3, time);
    matches.match4 = await matches_targets(tournament_id, round, date, team6, team2, time);
    matches.match5 = await matches_targets(tournament_id, round, date, team1, null, time);
    round = round + 1;
    matches.match6 = await matches_targets(tournament_id, round, date, team6, team1, time);
    matches.match7 = await matches_targets(tournament_id, round, date, team2, team7, time);
    matches.match8 = await matches_targets(tournament_id, round, date, team3, team8, time);
    matches.match9 = await matches_targets(tournament_id, round, date, team4, team9, time);
    matches.match10 = await matches_targets(tournament_id, round, date, team5, null, time);
    round = round + 1;
    matches.match11 = await matches_targets(tournament_id, round, date, team1, team5, time);
    matches.match12 = await matches_targets(tournament_id, round, date, team9, team3, time);
    matches.match13 = await matches_targets(tournament_id, round, date, team8, team2, time);
    matches.match14 = await matches_targets(tournament_id, round, date, team7, team6, time);
    matches.match15 = await matches_targets(tournament_id, round, date, team4, null, time);
    round = round + 1;
    matches.match16 = await matches_targets(tournament_id, round, date, team7, team1, time);
    matches.match17 = await matches_targets(tournament_id, round, date, team6, team8, time);
    matches.match18 = await matches_targets(tournament_id, round, date, team2, team9, time);
    matches.match19 = await matches_targets(tournament_id, round, date, team4, team5, time);
    matches.match20 = await matches_targets(tournament_id, round, date, team3, null, time);
    round = round + 1;
    matches.match21 = await matches_targets(tournament_id, round, date, team1, team4, time);
    matches.match22 = await matches_targets(tournament_id, round, date, team5, team3, time);
    matches.match23 = await matches_targets(tournament_id, round, date, team9, team6, time);
    matches.match24 = await matches_targets(tournament_id, round, date, team8, team7, time);
    matches.match25 = await matches_targets(tournament_id, round, date, team2, null, time);
    round = round + 1;
    matches.match26 = await matches_targets(tournament_id, round, date, team8, team1, time);
    matches.match27 = await matches_targets(tournament_id, round, date, team7, team9, time);
    matches.match28 = await matches_targets(tournament_id, round, date, team2, team5, time);
    matches.match29 = await matches_targets(tournament_id, round, date, team3, team4, time);
    matches.match30 = await matches_targets(tournament_id, round, date, team6, null, time);
    round = round + 1;
    matches.match31 = await matches_targets(tournament_id, round, date, team1, team3, time);
    matches.match32 = await matches_targets(tournament_id, round, date, team4, team2, time);
    matches.match33 = await matches_targets(tournament_id, round, date, team5, team6, time);
    matches.match34 = await matches_targets(tournament_id, round, date, team9, team8, time);
    matches.match35 = await matches_targets(tournament_id, round, date, team7, null, time);
    round = round + 1;
    matches.match36 = await matches_targets(tournament_id, round, date, team9, team1, time);
    matches.match37 = await matches_targets(tournament_id, round, date, team7, team5, time);
    matches.match38 = await matches_targets(tournament_id, round, date, team6, team4, time);
    matches.match39 = await matches_targets(tournament_id, round, date, team2, team3, time);
    matches.match40 = await matches_targets(tournament_id, round, date, team8, null, time);
    round = round + 1;
    matches.match41 = await matches_targets(tournament_id, round, date, team1, team2, time);
    matches.match42 = await matches_targets(tournament_id, round, date, team3, team6, time);
    matches.match43 = await matches_targets(tournament_id, round, date, team4, team7, time);
    matches.match44 = await matches_targets(tournament_id, round, date, team5, team8, time);
    matches.match45 = await matches_targets(tournament_id, round, date, team9, null, time);
    return {...matches}
}

async function create10teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team1, team10, time);
    matches.match2 = await matches_targets(tournament_id, round, date, team9, team5, time);
    matches.match3 = await matches_targets(tournament_id, round, date, team8, team4, time);
    matches.match4 = await matches_targets(tournament_id, round, date, team7, team3, time);
    matches.match5 = await matches_targets(tournament_id, round, date, team6, team2, time);
    round = round + 1;
    matches.match6 = await matches_targets(tournament_id, round, date, team6, team1, time);
    matches.match7 = await matches_targets(tournament_id, round, date, team2, team7, time);
    matches.match8 = await matches_targets(tournament_id, round, date, team3, team8, time);
    matches.match9 = await matches_targets(tournament_id, round, date, team4, team9, time);
    matches.match10 = await matches_targets(tournament_id, round, date, team5, team10, time);
    round = round + 1;
    matches.match11 = await matches_targets(tournament_id, round, date, team1, team5, time);
    matches.match12 = await matches_targets(tournament_id, round, date, team10, team4, time);
    matches.match13 = await matches_targets(tournament_id, round, date, team9, team3, time);
    matches.match14 = await matches_targets(tournament_id, round, date, team8, team2, time);
    matches.match15 = await matches_targets(tournament_id, round, date, team7, team6, time);
    round = round + 1;
    matches.match16 = await matches_targets(tournament_id, round, date, team7, team1, time);
    matches.match17 = await matches_targets(tournament_id, round, date, team6, team8, time);
    matches.match18 = await matches_targets(tournament_id, round, date, team2, team9, time);
    matches.match19 = await matches_targets(tournament_id, round, date, team3, team10, time);
    matches.match20 = await matches_targets(tournament_id, round, date, team4, team5, time);
    round = round + 1;
    matches.match21 = await matches_targets(tournament_id, round, date, team1, team4, time);
    matches.match22 = await matches_targets(tournament_id, round, date, team5, team3, time);
    matches.match23 = await matches_targets(tournament_id, round, date, team10, team2, time);
    matches.match24 = await matches_targets(tournament_id, round, date, team9, team6, time);
    matches.match25 = await matches_targets(tournament_id, round, date, team8, team7, time);
    round = round + 1;
    matches.match26 = await matches_targets(tournament_id, round, date, team8, team1, time);
    matches.match27 = await matches_targets(tournament_id, round, date, team7, team9, time);
    matches.match28 = await matches_targets(tournament_id, round, date, team6, team10, time);
    matches.match29 = await matches_targets(tournament_id, round, date, team2, team5, time);
    matches.match30 = await matches_targets(tournament_id, round, date, team3, team4, time);
    round = round + 1;
    matches.match31 = await matches_targets(tournament_id, round, date, team1, team3, time);
    matches.match32 = await matches_targets(tournament_id, round, date, team4, team2, time);
    matches.match33 = await matches_targets(tournament_id, round, date, team5, team6, time);
    matches.match34 = await matches_targets(tournament_id, round, date, team10, team7, time);
    matches.match35 = await matches_targets(tournament_id, round, date, team9, team8, time);
    round = round + 1;
    matches.match36 = await matches_targets(tournament_id, round, date, team9, team1, time);
    matches.match37 = await matches_targets(tournament_id, round, date, team8, team10, time);
    matches.match38 = await matches_targets(tournament_id, round, date, team7, team5, time);
    matches.match39 = await matches_targets(tournament_id, round, date, team6, team4, time);
    matches.match40 = await matches_targets(tournament_id, round, date, team2, team3, time);
    round = round + 1;
    matches.match41 = await matches_targets(tournament_id, round, date, team1, team2, time);
    matches.match42 = await matches_targets(tournament_id, round, date, team3, team6, time);
    matches.match43 = await matches_targets(tournament_id, round, date, team4, team7, time);
    matches.match44 = await matches_targets(tournament_id, round, date, team5, team8, time);
    matches.match45 = await matches_targets(tournament_id, round, date, team10, team9, time);

    return {...matches}
}

async function create11teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11) {
    let round = 1
    matches.match1 = await matches_targets(tournament_id, round, date, team11, team6, time);
    matches.match2 = await matches_targets(tournament_id, round, date, team10, team5, time);
    matches.match3 = await matches_targets(tournament_id, round, date, team9, team4, time);
    matches.match4 = await matches_targets(tournament_id, round, date, team8, team3, time);
    matches.match5 = await matches_targets(tournament_id, round, date, team7, team2, time);
    matches.match6 = await matches_targets(tournament_id, round, date, team1, null, time);
    round = round + 1;
    matches.match7 = await matches_targets(tournament_id, round, date, team7, team1, time);
    matches.match8 = await matches_targets(tournament_id, round, date, team2, team8, time);
    matches.match9 = await matches_targets(tournament_id, round, date, team3, team9, time);
    matches.match10 = await matches_targets(tournament_id, round, date, team4, team10, time);
    matches.match11 = await matches_targets(tournament_id, round, date, team5, team11, time);
    matches.match12 = await matches_targets(tournament_id, round, date, team6, null, time);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team1, team6, time);
    matches.match14 = await matches_targets(tournament_id, round, date, team11, team4, time);
    matches.match15 = await matches_targets(tournament_id, round, date, team10, team3, time);
    matches.match16 = await matches_targets(tournament_id, round, date, team9, team2, time);
    matches.match17 = await matches_targets(tournament_id, round, date, team8, team7, time);
    matches.match18 = await matches_targets(tournament_id, round, date, team5, null, time);
    round = round + 1;
    matches.match19 = await matches_targets(tournament_id, round, date, team8, team1, time);
    matches.match20 = await matches_targets(tournament_id, round, date, team7, team9, time);
    matches.match21 = await matches_targets(tournament_id, round, date, team2, team10, time);
    matches.match22 = await matches_targets(tournament_id, round, date, team3, team11, time);
    matches.match23 = await matches_targets(tournament_id, round, date, team5, team6, time);
    matches.match24 = await matches_targets(tournament_id, round, date, team4, null, time);
    round = round + 1;
    matches.match25 = await matches_targets(tournament_id, round, date, team1, team5, time);
    matches.match26 = await matches_targets(tournament_id, round, date, team6, team4, time);
    matches.match27 = await matches_targets(tournament_id, round, date, team11, team2, time);
    matches.match28 = await matches_targets(tournament_id, round, date, team10, team7, time);
    matches.match29 = await matches_targets(tournament_id, round, date, team9, team8, time);
    matches.match30 = await matches_targets(tournament_id, round, date, team3, null, time);
    round = round + 1;
    matches.match31 = await matches_targets(tournament_id, round, date, team9, team1, time);
    matches.match32 = await matches_targets(tournament_id, round, date, team8, team10, time);
    matches.match33 = await matches_targets(tournament_id, round, date, team7, team11, time);
    matches.match34 = await matches_targets(tournament_id, round, date, team3, team6, time);
    matches.match35 = await matches_targets(tournament_id, round, date, team4, team5, time);
    matches.match36 = await matches_targets(tournament_id, round, date, team2, null, time);
    round = round + 1;
    matches.match37 = await matches_targets(tournament_id, round, date, team1, team4, time);
    matches.match38 = await matches_targets(tournament_id, round, date, team5, team3, time);
    matches.match39 = await matches_targets(tournament_id, round, date, team6, team2, time);
    matches.match40 = await matches_targets(tournament_id, round, date, team11, team8, time);
    matches.match41 = await matches_targets(tournament_id, round, date, team10, team9, time);
    matches.match42 = await matches_targets(tournament_id, round, date, team7, null, time);
    round = round + 1;
    matches.match43 = await matches_targets(tournament_id, round, date, team10, team1, time);
    matches.match44 = await matches_targets(tournament_id, round, date, team9, team11, time);
    matches.match45 = await matches_targets(tournament_id, round, date, team7, team6, time);
    matches.match46 = await matches_targets(tournament_id, round, date, team2, team5, time);
    matches.match47 = await matches_targets(tournament_id, round, date, team3, team4, time);
    matches.match48 = await matches_targets(tournament_id, round, date, team8, null, time);
    round = round + 1;
    matches.match49 = await matches_targets(tournament_id, round, date, team1, team3, time);
    matches.match50 = await matches_targets(tournament_id, round, date, team4, team2, time);
    matches.match51 = await matches_targets(tournament_id, round, date, team5, team7, time);
    matches.match52 = await matches_targets(tournament_id, round, date, team6, team8, time);
    matches.match53 = await matches_targets(tournament_id, round, date, team11, team10, time);
    matches.match54 = await matches_targets(tournament_id, round, date, team9, null, time);
    round = round + 1;
    matches.match55 = await matches_targets(tournament_id, round, date, team11, team1, time, time);
    matches.match56 = await matches_targets(tournament_id, round, date, team9, team6, time, time);
    matches.match57 = await matches_targets(tournament_id, round, date, team8, team5, time, time);
    matches.match58 = await matches_targets(tournament_id, round, date, team7, team4, time, time);
    matches.match59 = await matches_targets(tournament_id, round, date, team2, team3, time, time);
    matches.match60 = await matches_targets(tournament_id, round, date, team10, null, time, time);
    round = round + 1;
    matches.match61 = await matches_targets(tournament_id, round, date, team1, team2, time);
    matches.match62 = await matches_targets(tournament_id, round, date, team3, team7, time);
    matches.match63 = await matches_targets(tournament_id, round, date, team4, team8, time);
    matches.match64 = await matches_targets(tournament_id, round, date, team5, team9, time);
    matches.match65 = await matches_targets(tournament_id, round, date, team6, team10, time);
    matches.match66 = await matches_targets(tournament_id, round, date, team11, null, time);
    
    return {...matches}
}

async function create12teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team1, team12, time);
    matches.match2 = await matches_targets(tournament_id, round, date, team11, team6, time);
    matches.match3 = await matches_targets(tournament_id, round, date, team10, team5, time);
    matches.match4 = await matches_targets(tournament_id, round, date, team9, team4, time);
    matches.match5 = await matches_targets(tournament_id, round, date, team8, team3, time);
    matches.match6 = await matches_targets(tournament_id, round, date, team7, team2, time);
    round = round + 1;
    matches.match7 = await matches_targets(tournament_id, round, date, team7, team1, time);
    matches.match8 = await matches_targets(tournament_id, round, date, team2, team8, time);
    matches.match9 = await matches_targets(tournament_id, round, date, team3, team9, time);
    matches.match10 = await matches_targets(tournament_id, round, date, team4, team10, time);
    matches.match11 = await matches_targets(tournament_id, round, date, team5, team11, time);
    matches.match12 = await matches_targets(tournament_id, round, date, team6, team12, time);
    round = round + 1;
    matches.match13 = await matches_targets(tournament_id, round, date, team1, team6, time);
    matches.match14 = await matches_targets(tournament_id, round, date, team12, team5, time);
    matches.match15 = await matches_targets(tournament_id, round, date, team11, team4, time);
    matches.match16 = await matches_targets(tournament_id, round, date, team10, team3, time);
    matches.match17 = await matches_targets(tournament_id, round, date, team9, team2, time);
    matches.match18 = await matches_targets(tournament_id, round, date, team8, team7, time);
    round = round + 1;
    matches.match19 = await matches_targets(tournament_id, round, date, team8, team1, time);
    matches.match20 = await matches_targets(tournament_id, round, date, team7, team9, time);
    matches.match21 = await matches_targets(tournament_id, round, date, team2, team10, time);
    matches.match22 = await matches_targets(tournament_id, round, date, team3, team11, time);
    matches.match23 = await matches_targets(tournament_id, round, date, team4, team12, time);
    matches.match24 = await matches_targets(tournament_id, round, date, team5, team6, time);
    round = round + 1;
    matches.match25 = await matches_targets(tournament_id, round, date, team1, team5, time, time);
    matches.match26 = await matches_targets(tournament_id, round, date, team6, team4, time, time);
    matches.match27 = await matches_targets(tournament_id, round, date, team12, team3, time, time);
    matches.match28 = await matches_targets(tournament_id, round, date, team11, team2, time, time);
    matches.match29 = await matches_targets(tournament_id, round, date, team10, team7, time, time);
    matches.match30 = await matches_targets(tournament_id, round, date, team9, team8, time, time);
    round = round + 1;
    matches.match31 = await matches_targets(tournament_id, round, date, team9, team1, time);
    matches.match32 = await matches_targets(tournament_id, round, date, team8, team10, time);
    matches.match33 = await matches_targets(tournament_id, round, date, team7, team11, time);
    matches.match34 = await matches_targets(tournament_id, round, date, team2, team12, time);
    matches.match35 = await matches_targets(tournament_id, round, date, team3, team6, time);
    matches.match36 = await matches_targets(tournament_id, round, date, team4, team5, time);
    round = round + 1;
    matches.match37 = await matches_targets(tournament_id, round, date, team1, team4, time);
    matches.match38 = await matches_targets(tournament_id, round, date, team5, team3, time);
    matches.match39 = await matches_targets(tournament_id, round, date, team6, team2, time);
    matches.match40 = await matches_targets(tournament_id, round, date, team12, team7, time);
    matches.match41 = await matches_targets(tournament_id, round, date, team11, team8, time);
    matches.match42 = await matches_targets(tournament_id, round, date, team10, team9, time);
    round = round + 1;
    matches.match43 = await matches_targets(tournament_id, round, date, team10, team1, time);
    matches.match44 = await matches_targets(tournament_id, round, date, team9, team11, time);
    matches.match45 = await matches_targets(tournament_id, round, date, team8, team12, time);
    matches.match46 = await matches_targets(tournament_id, round, date, team7, team6, time);
    matches.match47 = await matches_targets(tournament_id, round, date, team2, team5, time);
    matches.match48 = await matches_targets(tournament_id, round, date, team3, team4, time);
    round = round + 1;
    matches.match49 = await matches_targets(tournament_id, round, date, team1, team3, time);
    matches.match50 = await matches_targets(tournament_id, round, date, team4, team2, time);
    matches.match51 = await matches_targets(tournament_id, round, date, team5, team7, time);
    matches.match52 = await matches_targets(tournament_id, round, date, team6, team8, time);
    matches.match53 = await matches_targets(tournament_id, round, date, team12, team9, time);
    matches.match54 = await matches_targets(tournament_id, round, date, team11, team10, time);
    round = round + 1;
    matches.match55 = await matches_targets(tournament_id, round, date, team11, team1, time);
    matches.match56 = await matches_targets(tournament_id, round, date, team10, team12, time);
    matches.match57 = await matches_targets(tournament_id, round, date, team9, team6, time);
    matches.match58 = await matches_targets(tournament_id, round, date, team8, team5, time);
    matches.match59 = await matches_targets(tournament_id, round, date, team7, team4, time);
    matches.match60 = await matches_targets(tournament_id, round, date, team2, team3, time);
    round = round + 1;
    matches.match61 = await matches_targets(tournament_id, round, date, team1, team2, time);
    matches.match62 = await matches_targets(tournament_id, round, date, team3, team7, time);
    matches.match63 = await matches_targets(tournament_id, round, date, team4, team8, time);
    matches.match64 = await matches_targets(tournament_id, round, date, team5, team9, time);
    matches.match65 = await matches_targets(tournament_id, round, date, team6, team10, time);
    matches.match66 = await matches_targets(tournament_id, round, date, team12, team11, time);
    
    return {...matches}
}

async function create13teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13) {
    let round = 1;
    matches.match1 = await matches_targets(tournament_id, round, date, team13, team7, time);
    matches.match2 = await matches_targets(tournament_id, round, date, team12, team6, time);
    matches.match3 = await matches_targets(tournament_id, round, date, team11, team5, time);
    matches.match4 = await matches_targets(tournament_id, round, date, team10, team4, time);
    matches.match5 = await matches_targets(tournament_id, round, date, team9, team3, time);
    matches.match6 = await matches_targets(tournament_id, round, date, team8, team2, time);
    matches.match7 = await matches_targets(tournament_id, round, date, team1, null, time);
    round = round + 1;
    matches.match8 = await matches_targets(tournament_id, round, date, team8, team1, time);
    matches.match9 = await matches_targets(tournament_id, round, date, team2, team9, time);
    matches.match10 = await matches_targets(tournament_id, round, date, team3, team10, time);
    matches.match11 = await matches_targets(tournament_id, round, date, team4, team11, time);
    matches.match12 = await matches_targets(tournament_id, round, date, team5, team12, time);
    matches.match13 = await matches_targets(tournament_id, round, date, team6, team13, time);
    matches.match14 = await matches_targets(tournament_id, round, date, team7, null, time);
    round = round + 1;
    matches.match15 = await matches_targets(tournament_id, round, date, team1, team7, time);
    matches.match16 = await matches_targets(tournament_id, round, date, team13, team5, time);
    matches.match17 = await matches_targets(tournament_id, round, date, team12, team4, time);
    matches.match18 = await matches_targets(tournament_id, round, date, team11, team3, time);
    matches.match19 = await matches_targets(tournament_id, round, date, team10, team2, time);
    matches.match20 = await matches_targets(tournament_id, round, date, team9, team8, time);
    matches.match21 = await matches_targets(tournament_id, round, date, team6, null, time);
    round = round + 1;
    matches.match22 = await matches_targets(tournament_id, round, date, team9, team1, time, time);
    matches.match23 = await matches_targets(tournament_id, round, date, team8, team10, time, time);
    matches.match24 = await matches_targets(tournament_id, round, date, team2, team11, time, time);
    matches.match25 = await matches_targets(tournament_id, round, date, team3, team12, time, time);
    matches.match26 = await matches_targets(tournament_id, round, date, team4, team13, time, time);
    matches.match27 = await matches_targets(tournament_id, round, date, team6, team7, time, time);
    matches.match28 = await matches_targets(tournament_id, round, date, team5, null, time, time);
    round = round + 1;
    matches.match29 = await matches_targets(tournament_id, round, date, team1, team6, time);
    matches.match30 = await matches_targets(tournament_id, round, date, team7, team5, time);
    matches.match31 = await matches_targets(tournament_id, round, date, team13, team3, time);
    matches.match32 = await matches_targets(tournament_id, round, date, team12, team2, time);
    matches.match33 = await matches_targets(tournament_id, round, date, team11, team8, time);
    matches.match34 = await matches_targets(tournament_id, round, date, team10, team9, time);
    matches.match35 = await matches_targets(tournament_id, round, date, team4, null, time);
    round = round + 1;
    matches.match36 = await matches_targets(tournament_id, round, date, team10, team1, time);
    matches.match37 = await matches_targets(tournament_id, round, date, team9, team11, time);
    matches.match38 = await matches_targets(tournament_id, round, date, team8, team12, time);
    matches.match39 = await matches_targets(tournament_id, round, date, team2, team13, time);
    matches.match40 = await matches_targets(tournament_id, round, date, team4, team7, time);
    matches.match41 = await matches_targets(tournament_id, round, date, team5, team6, time);
    matches.match42 = await matches_targets(tournament_id, round, date, team3, null, time);
    round = round + 1;
    matches.match43 = await matches_targets(tournament_id, round, date, team1, team5, time);
    matches.match44 = await matches_targets(tournament_id, round, date, team6, team4, time);
    matches.match45 = await matches_targets(tournament_id, round, date, team7, team3, time);
    matches.match46 = await matches_targets(tournament_id, round, date, team13, team8, time);
    matches.match47 = await matches_targets(tournament_id, round, date, team12, team9, time);
    matches.match48 = await matches_targets(tournament_id, round, date, team11, team10, time);
    matches.match49 = await matches_targets(tournament_id, round, date, team2, null, time);
    round = round + 1;
    matches.match50 = await matches_targets(tournament_id, round, date, team11, team1, time);
    matches.match51 = await matches_targets(tournament_id, round, date, team10, team12, time);
    matches.match52 = await matches_targets(tournament_id, round, date, team9, team13, time);
    matches.match53 = await matches_targets(tournament_id, round, date, team2, team7, time);
    matches.match54 = await matches_targets(tournament_id, round, date, team3, team6, time);
    matches.match55 = await matches_targets(tournament_id, round, date, team4, team5, time);
    matches.match56 = await matches_targets(tournament_id, round, date, team8, null, time);
    round = round + 1;
    matches.match57 = await matches_targets(tournament_id, round, date, team1, team4, time);
    matches.match58 = await matches_targets(tournament_id, round, date, team5, team3, time);
    matches.match59 = await matches_targets(tournament_id, round, date, team6, team2, time);
    matches.match60 = await matches_targets(tournament_id, round, date, team7, team8, time);
    matches.match61 = await matches_targets(tournament_id, round, date, team13, team10, time);
    matches.match62 = await matches_targets(tournament_id, round, date, team12, team11, time);
    matches.match63 = await matches_targets(tournament_id, round, date, team9, null, time);
    round = round + 1;
    matches.match64 = await matches_targets(tournament_id, round, date, team12, team1, time);
    matches.match65 = await matches_targets(tournament_id, round, date, team11, team13, time);
    matches.match66 = await matches_targets(tournament_id, round, date, team9, team7, time);
    matches.match67 = await matches_targets(tournament_id, round, date, team8, team6, time);
    matches.match68 = await matches_targets(tournament_id, round, date, team2, team5, time);
    matches.match69 = await matches_targets(tournament_id, round, date, team3, team4, time);
    matches.match70 = await matches_targets(tournament_id, round, date, team10, null, time);
    round = round + 1;
    matches.match71 = await matches_targets(tournament_id, round, date, team1, team3, time);
    matches.match72= await matches_targets(tournament_id, round, date, team4, team2, time);
    matches.match73 = await matches_targets(tournament_id, round, date, team5, team8, time);
    matches.match74 = await matches_targets(tournament_id, round, date, team6, team9, time);
    matches.match75 = await matches_targets(tournament_id, round, date, team7, team10, time);
    matches.match76 = await matches_targets(tournament_id, round, date, team13, team12, time);
    matches.match77 = await matches_targets(tournament_id, round, date, team11, null, time);
    round = round + 1;
    matches.match78 = await matches_targets(tournament_id, round, date, team13, team1, time);
    matches.match79 = await matches_targets(tournament_id, round, date, team11, team7, time);
    matches.match80 = await matches_targets(tournament_id, round, date, team10, team6, time);
    matches.match81 = await matches_targets(tournament_id, round, date, team9, team5, time);
    matches.match82 = await matches_targets(tournament_id, round, date, team8, team4, time);
    matches.match83 = await matches_targets(tournament_id, round, date, team2, team3, time);
    matches.match84 = await matches_targets(tournament_id, round, date, team12, null, time);
    round = round + 1;
    matches.match85 = await matches_targets(tournament_id, round, date, team1, team2, time);
    matches.match86 = await matches_targets(tournament_id, round, date, team3, team8, time);
    matches.match87 = await matches_targets(tournament_id, round, date, team4, team9, time);
    matches.match88 = await matches_targets(tournament_id, round, date, team5, team10, time);
    matches.match89 = await matches_targets(tournament_id, round, date, team6, team11, time);
    matches.match90 = await matches_targets(tournament_id, round, date, team7, team12, time);
    matches.match91 = await matches_targets(tournament_id, round, date, team13, null, time);
   
    return {...matches}
}

export async function createMatches(teams_quantity, tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13) {
  if (teams_quantity == 4) 
    return await create4teamsMatches(tournament_id, date, time, team1, team2, team3, team4);
  if (teams_quantity == 5) 
    return await create5teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5);
  if (teams_quantity == 6)
    return await create6teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6);
  if (teams_quantity === 7)
    return await create7teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7);
  if (teams_quantity === 8)
    return await create8teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8);
  if (teams_quantity === 9)
    return await create9teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8, team9);
  if (teams_quantity === 10)
    return await create10teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10);
  if (teams_quantity === 11)
    return await create11teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11);
  if (teams_quantity === 12)
    return await create12teamsMatches(tournament_id, date, time, team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12);
  if (teams_quantity === 13)
    return await create13teamsMatches(tournament_id, date, time, team1, team2, team3, team4,  team5, team6, team7, team8, team9, team10, team11, team12, team13);
}