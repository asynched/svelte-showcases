<footer>
  <div class="container">
    <div class="info">
      <h1>CASAS <span>NAILHA</span></h1>
      <p>
        Este é apenas um projeto de teste com base no design do site da <a
          href="https://casasbahia.com.br/"
          target="_blank"
        >
          Casas Bahia.
        </a>
      </p>
    </div>
    <div class="links">
      <p>Feito por Nxrth-x</p>
      <a href="https://github.com/Nxrth-x" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/lima-eder" target="_blank">LinkedIn</a>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    background: #f0f0f0;
    color: var(--text);

    div.container {
      padding: 2rem 0;

      display: flex;
      justify-content: space-between;

      a {
        color: var(--primary);
        text-decoration: none;

        &:hover {
          color: var(--secondary);
        }
      }

      div.info {
        h1 {
          font-family: 'Poppins', sans-serif;
          color: var(--primary);
          letter-spacing: -1px;

          span {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            color: var(--secondary);
          }
        }
      }

      div.links {
        width: 25%;
        min-width: 4rem;

        font-size: 0.975rem;

        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
