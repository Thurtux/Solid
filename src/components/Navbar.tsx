export default function Navbar() {
    return (
      <div class="navbar bg-zinc-900">
        <div class="flex-1">
          <a href="/" class="btn btn-ghost normal-case text-xl">TrapMain</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
  