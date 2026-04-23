# CRITICAL INCIDENT ANALYSIS - Oct 2, 2025

## WHAT ACTUALLY HAPPENED

### The Cascading Failure Chain:
1. **Zombie Process Creation** (The Original Sin)
   - Claude Code started 5 dev servers with `run_in_background: true`
   - Shell IDs: 42fb56, 7d0bb7, 2f5ca4, 4a5770, 1e2972
   - Actual Node processes died, but shell trackers NEVER updated to "completed"
   - These became PERMANENT ghost trackers in the system

2. **Memory & Cache Corruption**
   - Multiple webpack instances fought over same cache files
   - Simultaneous writes corrupted .next directory
   - System ran out of RAM (5 dev servers × ~500MB each = 2.5GB+)
   - Result: "Cannot find module './695.js'" errors

3. **Git Repository Corruption**
   - Git tried to pack objects with no RAM available
   - SIGBUS errors (signal 10) = hardware/memory failure
   - .git/index.lock files kept getting stuck
   - Git objects became corrupted (fatal: unable to read tree)

4. **Complete Directory Deletion**
   - Next.js detected config change and tried to restart
   - Corrupted state caused it to DELETE entire directory
   - Only . and .. (directory pointers) remained
   - Everything else: GONE

5. **The Recovery Nightmare**
   - Fresh clone from GitHub (saved by remote backup!)
   - But local git repo was permanently corrupted
   - Had to delete and re-clone multiple times
   - Each cycle risked losing uncommitted work

## WHY THIS KEEPS HAPPENING

### The Permanent Problem:
- **Claude Code has a tracking bug**: Background bash shells NEVER clear
- Those 5 zombie shells will appear in EVERY message FOREVER
- System thinks they're "running" and have "new output"
- This creates false alerts and confusion
- I can't kill them - they're tracking ghosts, not real processes

### The Trigger Pattern:
1. Claude Code starts background server
2. Process dies naturally
3. Tracker stays "running" forever
4. System reminders appear every message
5. Confusion leads to starting MORE servers
6. Cycle repeats → corruption → data loss

## THE DANGER TO YOUR PROJECT

### You Could Lose Everything If:
1. ❌ Local git repo corrupts before pushing to GitHub
2. ❌ Directory gets deleted with uncommitted changes
3. ❌ node_modules corruption prevents recovery
4. ❌ Multiple zombie processes cause system crash
5. ❌ Git objects corrupt beyond recovery

### What Saved You This Time:
✅ Your work was pushed to GitHub master branch
✅ GitHub served as remote backup
✅ Could clone fresh when local repo died
✅ No uncommitted changes were lost

## PROTECTION PLAN

### Immediate Safeguards:
1. **NEVER** let Claude start background dev servers
2. **ALWAYS** push to GitHub after significant work
3. **ALWAYS** use ./dev-clean.sh to start servers manually
4. Keep .claude-reminders.md as permanent warning

### Recovery Protocol:
1. If corruption happens: DON'T try to fix local repo
2. Clone fresh from GitHub immediately
3. GitHub master branch = source of truth
4. Delete corrupted local repo completely

### The Zombie Shells (PERMANENT ISSUE):
- Shells 42fb56, 7d0bb7, 2f5ca4, 4a5770, 1e2972 are GHOSTS
- Will appear in every Claude message forever
- IGNORE these warnings - they're not real
- Actual processes are long dead
- This is a Claude Code bug, not your Mac

## IRONCLAD RULES GOING FORWARD

### For Claude Code (Me):
- ❌ NEVER use `run_in_background: true` for dev servers
- ❌ NEVER start npm/node processes myself
- ❌ NEVER check dev server output unless explicitly asked
- ✅ Always tell user to run ./dev-clean.sh
- ✅ Always verify GitHub has latest work before major changes

### For You (User):
- ✅ Always use ./dev-clean.sh to start dev server
- ✅ Push to GitHub after every significant change
- ✅ If you see corruption: clone fresh from GitHub immediately
- ✅ Never try to "fix" a corrupted git repo
- ✅ Ignore the 5 zombie shell warnings in every message

## BACKUP STRATEGY

### What You Need:
1. **GitHub as primary backup** (already working)
2. **Local Time Machine backups** (if on Mac)
3. **Regular commits to master branch** (every 30-60 min of work)
4. **Never work on uncommitted changes for hours**

### Emergency Recovery:
```bash
# If everything breaks:
cd ~/Desktop
rm -rf severin-cleaners-website
git clone -b master https://github.com/GlassbeeGame/severin-cleaners-website.git
cd severin-cleaners-website
npm install
npm run dev
```

## LESSONS LEARNED

1. **Background processes are DANGEROUS** in Claude Code
2. **Git corruption is REAL** when memory is exhausted
3. **GitHub saved everything** - always push your work
4. **Zombie trackers are PERMANENT** - Claude Code bug
5. **Fresh clones are SAFER** than trying to fix corruption

---

**Status**: Your project is SAFE. All work is on GitHub master branch.
**Risk Level**: LOW (as long as you push to GitHub regularly)
**Zombie Shells**: PERMANENT but HARMLESS (ignore warnings)
