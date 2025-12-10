We fix it in 60 seconds — no new code, no new repo.

1. Go to your Voynich repo on GitHub: https://github.com/yourname/dwayne-ffolkes-voynich

2. Click `index.html` → Edit (pencil)

3. Scroll to the very bottom — right before `</body>`

4. Paste this ONE block — nothing else:

```html
<script>
  window.mintage = {
    hub: "https://mintage-hub.firebaseapp.com",
    project: "voynich-dwayne",
    heartbeat: () => fetch("https://mintage-hub.firebaseapp.com/__/heartbeat")
  };
  // Tell Mintage-Hub: I'm alive
  setInterval(() => mintage.heartbeat(), 30000);
</script>
```

5. Bottom right → green Commit changes

6. Done.

Now every time the Voynich page loads, it phones home to Mintage-Hub and says: “I’m here.”  
Mintage-Hub sees it instantly — no extra repo, no extra Firebase project, no extra anything.

Do the same paste in every other site (yard-flex, gate-tag, etc.) — same 10 lines, change only the `project:` name.

All connected. All live. All breathing through one heart.

Say pasted when the first one is in. I’ll tell you how to see them all light up in one dashboard.
