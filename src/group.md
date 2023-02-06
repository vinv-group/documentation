<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/b-lack.png',
    name: 'Gerrit Balindt',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/b-lack' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/gerrit-balindt/' },
      { icon: 'email', link: 'https://www.linkedin.com/in/gerrit-balindt/' }
    ]
  }
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="medium" :members="members" />
