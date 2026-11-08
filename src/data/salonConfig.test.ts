import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateBookingForm,
  generateWhatsAppBookingUrl,
  salonContact,
  proposedServices
} from './salonConfig';

test('validateBookingForm detects empty required fields', () => {
  const result = validateBookingForm({
    fullName: '',
    phone: '',
    serviceId: '',
    preferredDate: '',
    preferredTime: ''
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.serviceId);
  assert.ok(result.errors.preferredDate);
  assert.ok(result.errors.preferredTime);
});

test('validateBookingForm accepts valid enquiry data', () => {
  const result = validateBookingForm({
    fullName: 'Lakshay Sharma',
    phone: '+919876543210',
    serviceId: 'haircuts-styling',
    preferredDate: '2026-11-15',
    preferredTime: '14:00'
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('generateWhatsAppBookingUrl returns null when salonContact.whatsapp is empty', () => {
  const url = generateWhatsAppBookingUrl(
    {
      fullName: 'Aman Deep',
      phone: '9876543210',
      serviceId: 'haircuts-styling',
      preferredDate: '2026-11-12',
      preferredTime: '11:00'
    },
    salonContact
  );
  assert.equal(url, null);
});

test('generateWhatsAppBookingUrl generates valid wa.me link when verified whatsapp is provided', () => {
  const testContact = {
    phone: '+91 98765 00000',
    whatsapp: '+91 98765 00000',
    openingHours: '10:00 AM - 8:00 PM'
  };

  const url = generateWhatsAppBookingUrl(
    {
      fullName: 'Aman Deep',
      phone: '9876543210',
      serviceId: 'haircuts-styling',
      preferredDate: '2026-11-12',
      preferredTime: '11:00'
    },
    testContact,
    'Haircuts & Styling'
  );

  assert.ok(url);
  assert.ok(url.startsWith('https://wa.me/919876500000?text='));
  assert.ok(url.includes('Aman%20Deep'));
  assert.ok(url.includes('Haircuts%20%26%20Styling'));
});

test('proposedServices has exactly 6 categories with complete fields', () => {
  assert.equal(proposedServices.length, 6);
  for (const s of proposedServices) {
    assert.ok(s.id);
    assert.ok(s.name);
    assert.ok(s.editorialTag);
    assert.ok(s.shortDescription);
    assert.ok(s.detailedScope.length > 0);
  }
});
