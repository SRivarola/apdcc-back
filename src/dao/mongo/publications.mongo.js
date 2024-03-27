import Publication from "./models/publication.model.js";

export default class PublicatiosMongo {
  constructor() {}

  async create(data) {
    let publication = await Publication.create(data);
    return {
      message: "Publication created",
      response: publication._id
    }
  }

  async readAll(query) {
    let all = await Publication.find(query)
      .populate('location')
      .populate('list');
    if(all.length > 0) {
      return {
        message: 'Publications found',
        response: all
      }
    } else {
      return {
        message: 'Publications not found',
        response: []
      }
    }
  }

  async readAllWithPaginate(query, data) {
    let all = await Publication.paginate(query, data);
    if (all.docs.length > 0) {
      return {
        message: "Publications found",
        response: all,
      };
    } else {
      return {
        message: "Publications not found",
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

  async readById(id) {
    let one = await Publication.findById(id)
    .populate("location")
    .populate("list");
    if(one) {
      return {
        message: 'Publication found',
        response: one
      }
    } else {
      return null
    }
  }

  async delete(id) {
    let one = await Publication.findByIdAndDelete(id);
    if(one) {
      return {
        message: 'Publication deleted',
        response: one
      }
    } else {
      return null
    }
  }
}