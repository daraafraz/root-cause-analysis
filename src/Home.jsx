import { Box, Container, Typography, Stack, Button, Paper, Card, CardContent, Grid, Alert, Chip } from '@mui/material'
import { Link } from 'react-router-dom'
import { Analytics as AnalyticsIcon, Timeline as TimelineIcon, BugReport as BugReportIcon, Info as InfoIcon } from '@mui/icons-material'

function Home() {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#fafafa'
    }}>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'primary.main', 
        color: 'white', 
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Chip 
              label="Static Prototype" 
              sx={{ 
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: 600,
                mb: 2
              }}
            />
            
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Root Cause Analysis
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                maxWidth: '800px',
                fontWeight: 300,
                opacity: 0.95,
                lineHeight: 1.6
              }}
            >
              A static prototype demonstrating root cause analysis interactions using mock data. Explore the UI patterns and workflows for identifying and analyzing system issues.
            </Typography>

            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3} 
              sx={{ mt: 4 }}
            >
              <Button
                component={Link}
                to="/root-cause"
                variant="contained"
                size="large"
                sx={{ 
                  bgcolor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
              >
                View Demo
              </Button>
              
              <Button
                component={Link}
                to="/root-cause"
                variant="outlined"
                size="large"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Try Root Cause Analysis
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Prototype Notice */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert 
          icon={<InfoIcon />} 
          severity="info"
          sx={{ 
            '& .MuiAlert-message': {
              width: '100%'
            }
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
            This is a static prototype using mock data
          </Typography>
          <Typography variant="body2">
            The goal of this prototype is to demonstrate the user interactions, workflows, and UI patterns for root cause analysis. All data shown is simulated for demonstration purposes.
          </Typography>
        </Alert>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 4, pb: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          sx={{ mb: 6, fontWeight: 600, color: 'text.primary' }}
        >
          Key Features
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <AnalyticsIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                </Box>
                <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 600 }}>
                  Time Series Analysis
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary">
                  Visualize historical data trends and identify patterns that correlate with system alerts and incidents
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <TimelineIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                </Box>
                <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 600 }}>
                  Correlation Detection
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary">
                  Automatically detect correlations between metrics and alert triggers to pinpoint root causes
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <BugReportIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                </Box>
                <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 600 }}>
                  Multi-Rule Analysis
                </Typography>
                <Typography variant="body2" align="center" color="text.secondary">
                  Configure complex trigger rules with AND/OR logic to analyze multiple conditions simultaneously
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container maxWidth="md">
          <Paper 
            elevation={3}
            sx={{ 
              p: 6, 
              textAlign: 'center',
              bgcolor: 'white'
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Ready to explore?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Explore the prototype to experience the interactions and workflows for root cause analysis
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4, fontStyle: 'italic' }}>
              Note: This prototype uses mock data to demonstrate UI patterns and user interactions
            </Typography>
            <Button
              component={Link}
              to="/root-cause"
              variant="contained"
              size="large"
              sx={{ 
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600
              }}
            >
              Launch Demo
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Footer with subtle MUI link */}
      <Box sx={{ py: 4, borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            justifyContent="space-between" 
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2" color="text.secondary">
              © 2025 Root Cause Analysis
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Built with{' '}
              <Link 
                to="/kitchen-sink" 
                style={{ 
                  textDecoration: 'none', 
                  color: 'inherit',
                  borderBottom: '1px dotted',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#1976d2'}
                onMouseLeave={(e) => e.target.style.color = 'inherit'}
              >
                Material-UI components
              </Link>
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Home

