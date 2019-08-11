import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList, Filter, Pagination } from './style';

class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    issuesFilter: 'open',
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  handleFetchIssues = async () => {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const { issuesFilter, page } = this.state;
    const { data } = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: issuesFilter,
        per_page: 5,
        page,
      },
    });

    this.setState({ issues: data });
  };

  handleChangeIssuesFilter = e => {
    this.setState({
      issuesFilter: e.target.value,
    });

    this.handleFetchIssues();
  };

  handlePrevPage = async () => {
    const { page } = this.state;

    await this.setState({ page: page - 1 });

    this.handleFetchIssues();
  };

  handleNextPage = async () => {
    const { page } = this.state;

    await this.setState({ page: page + 1 });

    this.handleFetchIssues();
  };

  render() {
    const { repository, issues, loading, issuesFilter, page } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          <Filter>
            <span>Filtro de Issues: </span>
            <select
              name="issuesFilter"
              id="issuesFilter"
              value={issuesFilter}
              onChange={this.handleChangeIssuesFilter}
            >
              <option value="open">Abertas</option>
              <option value="closed">Fechadas</option>
              <option value="all">Todas</option>
            </select>
          </Filter>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <b>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </b>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
          <Pagination>
            <button
              type="button"
              disabled={page < 2}
              onClick={this.handlePrevPage}
            >
              Anterior
            </button>
            <button type="button" onClick={this.handleNextPage}>
              Próxima
            </button>
          </Pagination>
        </IssueList>
      </Container>
    );
  }
}

export default Repository;
