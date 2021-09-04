<header>
  <div class="container">
    <h1>CASAS <span>NAILHA</span></h1>
    <input type="text" placeholder="O que você está procurando?" />
  </div>
</header>

<style lang="scss">
  header {
    div {
      padding: 1rem 0;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16rem;

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

      input {
        flex: 1;
        padding: 0.5rem;
        border: 1px solid var(--border);
        border-radius: 0.25rem;
        outline: none;
      }
    }
  }
</style>
