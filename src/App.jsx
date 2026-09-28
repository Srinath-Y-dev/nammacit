import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';

// Reusing our existing completed pages (we will refactor them next)
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import ODPage from './pages/ODPage';
import FacultyODPage from './pages/faculty/FacultyODPage';
import AdminODReportsPage from './pages/admin/AdminODReportsPage';

// Batch 1 Imports
import ClubVenueBookingPage from './pages/clubhead/ClubVenueBookingPage';
import ClubMembersPage from './pages/clubhead/ClubMembersPage';
import AdminVenueManagementPage from './pages/admin/AdminVenueManagementPage';
import AdminClubsPage from './pages/admin/AdminClubsPage';
import SettingsPage from './pages/SettingsPage';

// Batch 2 Imports
import CreateEventPage from './pages/CreateEventPage';
import EventDetailsPage from './pages/EventDetailsPage';
import MyRegistrationsPage from './pages/MyRegistrationsPage';

// Batch 3 Imports
import CreateODPage from './pages/CreateODPage';
import ODDetailsPage from './pages/ODDetailsPage';

// Batch 4 Imports
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminReportsPage from './pages/admin/AdminReportsPage';
import CreateAnnouncementPage from './pages/CreateAnnouncementPage';
import NotificationsPage from './pages/NotificationsPage';
import AnnouncementsPage from './pages/AnnouncementsPage';

import GenericListPage from './components/GenericListPage';

const PlaceholderPage = ({ title }) => (
  <GenericListPage title={title} type="generic" />
);

// We define a wrapper that infers the list type based on the title
const PlaceholderWithNav = ({ title }) => {
  let type = 'generic';
  const t = title.toLowerCase();
  if (t.includes('club')) type = 'club';
  else if (t.includes('announcement')) type = 'announcement';
  else if (t.includes('event') || t.includes('schedule')) type = 'event';
  else if (t.includes('venue')) type = 'venue';
  else if (t.includes('user') || t.includes('student') || t.includes('faculty') || t.includes('head')) type = 'user';
  
  return <GenericListPage title={title} type={type} />;
};

export default function App() {
  return (
    <AuthProvider>
      <div className="w-full h-full bg-white relative">
        <BrowserRouter>
            <Routes>
              {/* Default Redirect to Login */}
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<LoginPage />} />
              
              {/* STUDENT ROUTES */}
              <Route path="/student/home" element={<HomePage />} />
              <Route path="/student/events" element={<EventsPage />} />
              <Route path="/student/events/:id" element={<EventDetailsPage />} />
              <Route path="/student/my-registrations" element={<MyRegistrationsPage />} />
              <Route path="/student/od-requests" element={<ODPage />} />
              <Route path="/student/od-requests/create" element={<CreateODPage />} />
              <Route path="/student/od-requests/:id" element={<ODDetailsPage />} />
              <Route path="/student/clubs" element={<PlaceholderWithNav title="Clubs" />} />
              <Route path="/student/clubs/:id" element={<PlaceholderWithNav title="Club Details" />} />
              <Route path="/student/announcements" element={<AnnouncementsPage />} />
              <Route path="/student/announcements/:id" element={<PlaceholderWithNav title="Announcement Details" />} />
              <Route path="/student/notifications" element={<NotificationsPage />} />
              <Route path="/student/profile" element={<ProfilePage />} />
              <Route path="/student/settings" element={<SettingsPage />} />

              {/* FACULTY ROUTES */}
              <Route path="/faculty/home" element={<HomePage />} />
              <Route path="/faculty/od-approvals" element={<FacultyODPage />} />
              <Route path="/faculty/od-approvals/:id" element={<ODDetailsPage />} />
              <Route path="/faculty/events" element={<EventsPage />} />
              <Route path="/faculty/events/create" element={<CreateEventPage />} />
              <Route path="/faculty/events/:id" element={<EventDetailsPage />} />
              <Route path="/faculty/events/:id/edit" element={<PlaceholderWithNav title="Edit Event" />} />
              <Route path="/faculty/venue-schedule" element={<PlaceholderWithNav title="Venue Schedule" />} />
              <Route path="/faculty/announcements" element={<AnnouncementsPage />} />
              <Route path="/faculty/announcements/create" element={<CreateAnnouncementPage />} />
              <Route path="/faculty/notifications" element={<NotificationsPage />} />
              <Route path="/faculty/profile" element={<ProfilePage />} />
              <Route path="/faculty/settings" element={<SettingsPage />} />

              {/* CLUB HEAD ROUTES */}
              <Route path="/clubhead/home" element={<HomePage />} />
              <Route path="/clubhead/members" element={<ClubMembersPage />} />
              <Route path="/clubhead/members/:id" element={<PlaceholderWithNav title="Member Details" />} />
              <Route path="/clubhead/events" element={<EventsPage />} />
              <Route path="/clubhead/events/create" element={<CreateEventPage />} />
              <Route path="/clubhead/events/:id" element={<EventDetailsPage />} />
              <Route path="/clubhead/events/:id/edit" element={<PlaceholderWithNav title="Edit Event" />} />
              <Route path="/clubhead/venue-booking" element={<ClubVenueBookingPage />} />
              <Route path="/clubhead/venue-booking/request" element={<PlaceholderWithNav title="Request Venue" />} />
              <Route path="/clubhead/venue-booking/:id" element={<PlaceholderWithNav title="Venue Request Details" />} />
              <Route path="/clubhead/announcements" element={<AnnouncementsPage />} />
              <Route path="/clubhead/announcements/create" element={<CreateAnnouncementPage />} />
              <Route path="/clubhead/notifications" element={<NotificationsPage />} />
              <Route path="/clubhead/profile" element={<ProfilePage />} />
              <Route path="/clubhead/settings" element={<SettingsPage />} />

              {/* ADMIN ROUTES */}
              <Route path="/admin/home" element={<HomePage />} />
              <Route path="/admin/users" element={<AdminUsersPage />} />
              <Route path="/admin/users/students" element={<PlaceholderWithNav title="Students List" />} />
              <Route path="/admin/users/faculty" element={<PlaceholderWithNav title="Faculty List" />} />
              <Route path="/admin/users/clubheads" element={<PlaceholderWithNav title="Club Heads List" />} />
              <Route path="/admin/users/:id" element={<PlaceholderWithNav title="User Profile Details" />} />
              <Route path="/admin/od-management" element={<AdminODReportsPage />} />
              <Route path="/admin/od-management/:id" element={<ODDetailsPage />} />
              <Route path="/admin/venue-management" element={<AdminVenueManagementPage />} />
              <Route path="/admin/venue-management/:id" element={<PlaceholderWithNav title="Venue Details" />} />
              <Route path="/admin/events" element={<EventsPage />} />
              <Route path="/admin/events/:id" element={<EventDetailsPage />} />
              <Route path="/admin/clubs" element={<AdminClubsPage />} />
              <Route path="/admin/clubs/create" element={<PlaceholderWithNav title="Create Club" />} />
              <Route path="/admin/clubs/:id" element={<PlaceholderWithNav title="Club Details" />} />
              <Route path="/admin/announcements" element={<AnnouncementsPage />} />
              <Route path="/admin/announcements/create" element={<CreateAnnouncementPage />} />
              <Route path="/admin/announcements/:id" element={<PlaceholderWithNav title="Announcement Details" />} />
              <Route path="/admin/notifications" element={<NotificationsPage />} />
              <Route path="/admin/reports" element={<AdminReportsPage />} />
              <Route path="/admin/settings" element={<SettingsPage />} />
              <Route path="/admin/profile" element={<ProfilePage />} />

            </Routes>
          </BrowserRouter>
      </div>
    </AuthProvider>
  );
}
