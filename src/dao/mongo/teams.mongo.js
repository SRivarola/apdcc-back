import Team from "./models/team.model.js";

export default class TeamsMongo {
  constructor() {}

  async create(data) {
    let team = await Team.create(data);
    return {
      message: "Team created",
      response: team._id,
    };
  }

  async read(query, data) {
    let all = await Team.paginate(query, data);
    if (all.docs.length > 0) {
      return {
        message: "Teams found",
        response: all,
      };
    } else {
      return {
        message: "Teams not found",
        response: {
          docs: [],
          totalDocs: 0,
          limit: 20,
          totalPages: 0,
          page: 0,
          pagingCounter: 0,
          hasPrevPage: false,
          hasNextPage: false,
          prevPage: null,
          nextPage: null,
        },
      };
    }
  }

  async readAll(query) {
    let all = await Team.find(query).populate('country_id');
    if (all.length > 0) {
      return {
        message: "Teams found",
        response: all,
      };
    } else {
      return {
        message: "Teams not found",
        response: [],
      };
    }
  }

  async readById(id) {
    let one = await Team.findById(id)
      .populate("category_id")
      .populate("country_id");
    
    if (one) {
      return {
        message: "Team found",
        response: one,
      };
    } else {
      return null;
    }
  }

  async readOne(data) {
    let one = await Team.findOne(data);
    if (one) {
      return {
        message: "Team found",
        response: one,
      };
    } else {
      return null;
    }
  }

  async update(id, data) {
    let one = await Team.findByIdAndUpdate(id, data, { new: true });
    if (one) {
      return {
        message: "Team updated",
        response: one,
      };
    } else {
      return null;
    }
  }

  async delete(id) {
    let one = await Team.findByIdAndDelete(id);
    if (one) {
      return {
        message: "Team deleted",
        response: one,
      };
    } else {
      return null;
    }
  }
}