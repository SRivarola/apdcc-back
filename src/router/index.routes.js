import MyRouter from "./router.js";
import AuthRouter from "./routes/auth.routes.js";
import CountriesRouter from "./routes/countries.routes.js";
import CategoriesRouter from "./routes/categories.routes.js";
import PlayersRouter from "./routes/players.routes.js";
import TeamsRouter from "./routes/teams.routes.js";
import TournamentsRouter from "./routes/tournaments.routes.js";
import MatchesRouter from "./routes/matches.routes.js";
import TargetsRouter from "./routes/targets.routes.js";
import CloudinaryRouter from "./routes/gallery.routes.js";
import PopupsRouter from "./routes/popup.routes.js";
import PublicationsRouter from "./routes/publications.routes.js";

const auth = new AuthRouter();
const countries = new CountriesRouter();
const categories = new CategoriesRouter();
const players = new PlayersRouter();
const teams = new TeamsRouter();
const tournaments = new TournamentsRouter();
const matches = new MatchesRouter();
const targets = new TargetsRouter();
const cloudinary = new CloudinaryRouter();
const popups = new PopupsRouter();
const publications = new PublicationsRouter();

export default class IndexRouter extends MyRouter {
    init() {
        this.get("/", (req, res) => res.status(200).json('apdcc app api'));
        this.use('/auth', auth.getRouter());
        this.use('/countries', countries.getRouter());
        this.use('/categories', categories.getRouter());
        this.use('/players', players.getRouter());
        this.use('/teams', teams.getRouter());
        this.use('/tournaments', tournaments.getRouter());
        this.use('/matches', matches.getRouter());
        this.use('/targets', targets.getRouter());
        this.use('/cloudinary', cloudinary.getRouter());
        this.use('/popups', popups.getRouter());
        this.use('/publications', publications.getRouter());
    }
}